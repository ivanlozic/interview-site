import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { QuestionsComponent } from './questions/questions.component';
import { RandomPickerComponent } from './questions/random-picker/random-picker.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: QuestionsComponent, children: [ {
    path:'random', component:RandomPickerComponent
  }] },
  { path: 'books', component: BooksComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
