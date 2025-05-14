interface Database {
    save(task: Task): Promise<void>;
    update(task: Task): Promise<void>;
    fetch(taskId: number): Promise<Task | null>;
    fetchAll(): Promise<Task[]>;
}
declare class Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    constructor(id: number, title: string, description: string, completed?: boolean);
    markAsCompleted(): void;
    toString(): string;
}
declare class TaskManager {
    private tasks;
    private db;
    constructor(db: Database);
    addTask(title: string, description: string): Promise<Task>;
    updateTask(taskId: number, title: string, description: string): Promise<Task | null>;
    getTask(taskId: number): Promise<Task | null>;
    listTasks(): Promise<string>;
}
declare class InMemoryDatabase implements Database {
    private storage;
    save(task: Task): Promise<void>;
    update(task: Task): Promise<void>;
    fetch(taskId: number): Promise<Task | null>;
    fetchAll(): Promise<Task[]>;
}
