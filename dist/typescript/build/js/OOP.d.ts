declare class Shape {
    constructor(color: any);
    color: any;
}
declare class Circle extends Shape {
    constructor(color: any, radius: any);
    radius: any;
    area(): number;
    displaycolor(): void;
}
