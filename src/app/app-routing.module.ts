import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'books',component:BooksComponent},
  {path: 'courses',component:CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
