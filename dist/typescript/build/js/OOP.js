"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    displaycolor() {
        console.log(`The color of the circle is ${this.color}`);
    }
}
