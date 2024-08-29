// Define the Rectangle class
class Rectangle {
    constructor(width, height) {
        this._width = width;   // Store width in a private property
        this._height = height; // Store height in a private property
    }

    // Getter for the width property
    get width() {
        return this._width;
    }

    // Getter for the height property
    get height() {
        return this._height;
    }

    // Method to calculate and return the area of the rectangle
    getArea() {
        return this._width * this._height;
    }
}

// Define the Square class that extends Rectangle
class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Call the parent class constructor with side for both width and height
    }

    // Method to calculate and return the perimeter of the square
    getPerimeter() {
        return 4 * this._width; // Or this._height, since both are the same in a square
    }
}

// Example usage:
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
