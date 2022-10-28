import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime } from 'rxjs';
import { Course } from '../../interfaces/courses.interfaces';
import { CoursesService } from '../../services/courses.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {



  termino: string = '';
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(private coursesService: CoursesService) { }


  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(resp => this.filteredCourses = resp);
  }


  buscar(){
    this.coursesService.getCourses(this.termino)
        .subscribe(resp => {this.filteredCourses = resp});
  }


}
