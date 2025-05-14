declare abstract class Shape {
    color: string;
    constructor(color: string);
    abstract area(): number;
    abstract displaycolor(): void;
}
declare class Circle extends Shape {
    radius: number;
    constructor(color: string, radius: number);
    area(): number;
    displaycolor(): void;
}
