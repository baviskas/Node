//var vs let & const
function sayHello () {
	for(var i = 0; i < 5; i++) {
		console.log(i);
	}
	console.log('Outside loop',i);
}
sayHello();

function sayHello () {
	for(let i = 0; i < 5; i++) {
		console.log(i);
	}
	console.log('Outside loop',i);
}


//Objects in JS
let person = {
	name: 'Sandesh',
	talk : function() {
		console.log('Can talk');
	},
	walk : function() {
		console.log('Can walk');
	}
};

let person = {
	name: 'Sandesh',
	talk() {
		console.log('Can talk');
	},
	walk() {
		console.log('Can walk');
	}
};
console.log(person.name);
console.log(person['name']);

//this keyword is JS
let person = {
	name: 'Sandesh',
	walk() {
		console.log('this',this);
	}
};
person.walk();

const walk = person.walk();
walk();

//bind
const walk = person.walk.bind(person);
walk();

//Arrow Functions:
const sqaure = function(number) {
	return number * number;
}
const sqaure = number => number * number;

//filter
const jobs = [
	{id: 0, isActive: true},
	{id: 1, isActive: true},
	{id: 2, isActive: true},
	{id: 3, isActive: false}
];

const activeJobs = jobs.filter(function(job){
	return job.isActive;
});
const activeJobs = jobs.filter(job => job.isActive);

//Arrow functions does not rebind context
let person = {
	name: 'Sandesh',
	talk() {
		setTimeout(function(){
			console.log('this');			
		},3000);
	}
};
person.walk();

//Map function..
const colors = ['red','green','yellow'];
const colorList = colors.map(function(color){
	return `<li>${color}</li>`;
});


//Object Destructuring
const address = {
	street: 'Yerwada Road',
	city: 'Pune',
	country: 'India'
};
const street = address.street;
const city = address.city;
const country = address.country;

const { street, city, country } = address;

//Spread operator
const first = [10,20,30];
const second = [50,60,70];

const combined = first.concat(second);
const combined = [...first, ...second];


const first = { name: 'Sandesh', company: 'CDK Global' };
const second = { title: 'SMT'};

const combined = { ...first, ...second };


//Class

class Person = {
	constructor(name){
		this.name = name;
	}
	talk() {
		console.log('this');
	}
}

const person = new Person('Sandesh');
person.talk();


//Inheritence

class Person {
	constructor(name){
		this.name = name;
	}
	talk() {
		console.log('Can talk');
	}
}

const person = new Person('Sandesh');
person.talk();

class Teacher extends Person {
	constructor(name,degree) {
		super(name);
		this.degree = degree;
	}
	teach() {
		console.log('Can teach');
	}
}

const teacher = new Teacher('Sandesh','BTech');
console.log(teacher);