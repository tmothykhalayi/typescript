"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Task {
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
    constructor(db) {
        this.tasks = [];
        this.db = db;
    }
    addTask(title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTask = new Task(this.tasks.length + 1, title, description);
            this.tasks.push(newTask);
            yield this.db.save(newTask);
            return newTask;
        });
    }
    updateTask(taskId, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.db.fetch(taskId);
            if (task) {
                task.title = title;
                task.description = description;
                yield this.db.update(task);
                return task;
            }
            else {
                return null;
            }
        });
    }
    getTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.fetch(taskId);
        });
    }
    listTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.db.fetchAll();
            return tasks.map((task) => task.toString()).join("\n");
        });
    }
}
class InMemoryDatabase {
    constructor() {
        this.storage = new Map();
    }
    save(task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.storage.set(task.id, task);
        });
    }
    update(task) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.storage.has(task.id)) {
                this.storage.set(task.id, task);
            }
        });
    }
    fetch(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            return (_a = this.storage.get(taskId)) !== null && _a !== void 0 ? _a : null;
        });
    }
    fetchAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Array.from(this.storage.values());
        });
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const db = new InMemoryDatabase();
    const manager = new TaskManager(db);
    const task1 = yield manager.addTask("Finish TypeScript project", "Complete all modules and submit");
    const task2 = yield manager.addTask("Grocery Shopping", "Buy vegetables, fruits, and bread");
    console.log("All Tasks:");
    console.log(yield manager.listTasks());
    yield manager.updateTask(task1.id, "Finish TypeScript project", "Complete all modules and tests");
    console.log("\nAfter Update:");
    console.log(yield manager.listTasks());
    const fetchedTask = yield manager.getTask(task1.id);
    console.log("\nFetched Task:");
    if (fetchedTask) {
        console.log(fetchedTask.toString());
    }
}))();
