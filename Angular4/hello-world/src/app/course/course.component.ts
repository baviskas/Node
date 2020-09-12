import { Component } from '@angular/core';
import { CoursesService} from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses;
  viewModel = 'map';
  canSave = true;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  onAdd() {
    this.courses.push('New Item');
  }
  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
