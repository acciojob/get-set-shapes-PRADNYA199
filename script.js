//complete this code
class Rectangle {
	constructor(width,height)
	{
		this.width=width;
		this.height=height;
	}
	getArea(){
		return width*height;
	}
}

class Square extends Animal {
	constructor(width,height,side){
		super(width,height);
		this.side=side;
	}
	getPerimeter(){
		return 4*side;
	}
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
