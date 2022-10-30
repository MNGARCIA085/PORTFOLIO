import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { AddComponent } from './pages/add/add.component';




@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    CourseCardComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
