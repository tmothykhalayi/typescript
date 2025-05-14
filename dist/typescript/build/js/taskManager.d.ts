declare var __awaiter: any;
declare class Task {
    constructor(id: any, title: any, description: any, completed?: boolean);
    id: any;
    title: any;
    description: any;
    completed: boolean;
    markAsCompleted(): void;
    toString(): string;
}
declare class TaskManager {
    constructor(db: any);
    tasks: any[];
    db: any;
    addTask(title: any, description: any): any;
    updateTask(taskId: any, title: any, description: any): any;
    getTask(taskId: any): any;
    listTasks(): any;
}
declare class InMemoryDatabase {
    storage: Map<any, any>;
    save(task: any): any;
    update(task: any): any;
    fetch(taskId: any): any;
    fetchAll(): any;
}
