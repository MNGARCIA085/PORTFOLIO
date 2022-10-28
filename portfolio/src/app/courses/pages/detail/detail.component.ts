import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Course } from '../../interfaces/courses.interfaces';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  course!: Course;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CoursesService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.courseService.getCourse(id))
      )
      .subscribe(course => {
              console.log(course);
              this.course = course;
              console.log(course.certificate);
              console.log(typeof(course));
            }  
          )
  }

}
