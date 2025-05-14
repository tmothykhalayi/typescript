"use strict";
class Task {
    id;
    title;
    description;
    completed;
    constructor(id, title, description, completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    markAsCompleted() {
        this.completed = true;
    }
    toString() {
        return `${this.title} (ID: ${this.id}) - ${this.completed ? "Completed" : "Pending"}`;
    }
}
class TaskManager {
    tasks = [];
    db;
    constructor(db) {
        this.db = db;
    }
    async addTask(title, description) {
        const newTask = new Task(this.tasks.length + 1, title, description);
        this.tasks.push(newTask);
        await this.db.save(newTask);
        return newTask;
    }
    async updateTask(taskId, title, description) {
        const task = await this.db.fetch(taskId);
        if (task) {
            task.title = title;
            task.description = description;
            await this.db.update(task);
            return task;
        }
        else {
            return null;
        }
    }
    async getTask(taskId) {
        return this.db.fetch(taskId);
    }
    async listTasks() {
        const tasks = await this.db.fetchAll();
        return tasks.map((task) => task.toString()).join("\n");
    }
}
class InMemoryDatabase {
    storage = new Map();
    async save(task) {
        this.storage.set(task.id, task);
    }
    async update(task) {
        if (this.storage.has(task.id)) {
            this.storage.set(task.id, task);
        }
    }
    async fetch(taskId) {
        return this.storage.get(taskId) ?? null;
    }
    async fetchAll() {
        return Array.from(this.storage.values());
    }
}
(async () => {
    const db = new InMemoryDatabase();
    const manager = new TaskManager(db);
    const task1 = await manager.addTask("Finish TypeScript project", "Complete all modules and submit");
    const task2 = await manager.addTask("Grocery Shopping", "Buy vegetables, fruits, and bread");
    console.log("All Tasks:");
    console.log(await manager.listTasks());
    await manager.updateTask(task1.id, "Finish TypeScript project", "Complete all modules and tests");
    console.log("\nAfter Update:");
    console.log(await manager.listTasks());
    const fetchedTask = await manager.getTask(task1.id);
    console.log("\nFetched Task:");
    if (fetchedTask) {
        console.log(fetchedTask.toString());
    }
})();
