import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  cursos: string[] = ['angular','react','node'];

  cursosFiltrados: string[] = this.cursos;


  termino: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  buscar(){
    console.log(this.termino);
    this.cursosFiltrados = ['dsfdsfs'];

  }


}
