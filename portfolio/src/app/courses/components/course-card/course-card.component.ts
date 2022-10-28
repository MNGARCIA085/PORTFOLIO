import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../interfaces/courses.interfaces';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() course!:Course;

}
