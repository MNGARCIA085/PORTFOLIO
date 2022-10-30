import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/courses.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _baseUrl = 'http://localhost:4000';

  constructor(private http:HttpClient) { }

  
  // devuelve todos los cursos; dispone de filtros
  getCourses(title?:string):Observable<Course[]>{
    let url = '';
    if (title){
      url = `${this._baseUrl}/api/courses/?title=${title}`;
    } else {
      url = `${this._baseUrl}/api/courses`;
    }
    console.log('url',url);
    return this.http.get<Course[]>(url);
  }


  // devuelve un curso
  getCourse(id:string):Observable<Course[]>{
    const url = `${this._baseUrl}/api/courses/${id}`;
    return this.http.get<Course[]>(url);
  }

  addCourse(course:Course):Observable<Course>{
    return this.http.post<Course>(`${this._baseUrl}/api/courses`,course)
  }


  

  



}
