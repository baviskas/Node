import { Person } from "./Person";

export default class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree
    }
    teach() {
        console.log('teach');
    }
}
