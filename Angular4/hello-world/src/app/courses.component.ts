import { Component } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  'selector': 'courses',
  'template': `
    <h2>{{getTitle()}}</h2>
    <ul>
      <li *ngFor="let course of courses">{{course }}
      </li>
    </ul>
    <div>
      {{course.title | uppercase | lowercase}}<br/>
      {{course.students | number}}<br/>
      {{course.rating | number:'2.2-2'}}<br/>
      {{course.price | currency:'INR':true:'3.2-2'}}<br/>
      {{course.releaseDate | date:'shortDate'}} <br/>
      {{course.description | summary:'40'}}
    </div>
    <!--<img src='{{ imageUrl}}'/>-->
    <img [src]="imageUrl"/>
    <button class='btn btn-primary' [class.active]='isActive'>Class Binding</button> <!-- class binding-->
    <button class="btn btn-secondary" [style.backgroundColor]="isActive ? 'red': 'white'">Style Binding</button> <!-- style binding -->
    <button class="btn-primary" (click)="onSave()">Save</button>
    <input #email type=‘text’ (keyup.enter)='onKeyUp(email.value)'/>
    <!-- Two way Data Binding -->
    <!--<input type=‘text’ [value]='name' (keyup.enter)='name=$event.target.value; onKeyUpForName()'/>-->
    <br/><input type='text' [(ngModel)]='name' (keyup.enter)='onKeyUpForName()' />
    <p>{{name | customTitleCase}}</p>
  `,
  'styleUrls': ['./app.component.css']
})

export class CoursesComponent {
  courses;
  course = {
    title: 'The complete Angular Course',
    rating: 4.9786,
    students: 30298,
    price: 190.34,
    releaseDate: new Date(2019, 11, 5),
    description: 'This course will include all details of Angular 4, components, services, ' +
      'modules, pipe and many more other features of Angular.'
  };
  imageUrl = 'http://lorempixel.com/400/200';
  isActive = true;
  name = '';
  // bad way of calling service
  // This will make code tightly coupled and
  // make it hard to write test cases...
  /*constructor() {
    const service = new CoursesService();
    this.courses = service.getCourses();
  }*/
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  onSave() {
    console.log('Button was clicked');
  }
  onKeyUp(email) {
    // if($event.keyCode === 13) {....} Older way
    console.log('Enter pressed', email);
  }
  onKeyUpForName() {
    console.log('Name', this.name);
  }
  getTitle () {
    return 'List of Courses';
  }
}
