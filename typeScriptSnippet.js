let num: number;
let str: string;
let bool: boolean;
let a: any;
let arr: number[] = [10, 20, 30];
let randomArr: any[] = [10, 'sandy', true];
const abc = 'yo';

enum Color { red = 0, green = 1, blue = 2 };

let backgroundolor = Color[0];

console.log(backgroundolor);

let drawPoint = (point: {x: number, y: number}) => {
// parameter named point is an object with 2 properties which are numbers.
    console.log(point.x, point.y);
}
drawPoint({
	x: 10,
	y: 20
});

interface Point {
	x: number,
	y: number
};
let drawPoint2 = (point: Point) => {   //Arrow function
// parameter named point is an object matching with interface Point
    console.log(point.x, point.y);
};
drawPoint2({
	x: 10,
	y: 20
});

class Point1 {
    x: number;
	y: number;
	
	draw() {
		//console.log(x,y);
	}
	getDistance(another: Point){
        console.log(another.x, another.y);
    }	
}