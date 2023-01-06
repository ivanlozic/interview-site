import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AngularQuestionsComponent } from './questions/angular-questions/angular-questions.component';
import { CssQuestionsComponent } from './questions/css-questions/css-questions.component';
import { GitQuestionsComponent } from './questions/git-questions/git-questions.component';
import { HtmlQuestionsComponent } from './questions/html-questions/html-questions.component';
import { JavascriptQuestionsComponent } from './questions/javascript-questions/javascript-questions.component';
import { NodejsQuestionsComponent } from './questions/nodejs-questions/nodejs-questions.component';
import { QuestionsComponent } from './questions/questions.component';
import { RandomPickerComponent } from './questions/random-picker/random-picker.component';
import { ReactQuestionsComponent } from './questions/react-questions/react-questions.component';
import { SqlQuestionsComponent } from './questions/sql-questions/sql-questions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {
    path: 'questions',
    component: QuestionsComponent,
    children: [
      {
        path: 'random',
        component: RandomPickerComponent,
      },
      {
        path: 'html-questions',
        component: HtmlQuestionsComponent,
      },
      {
        path: 'css-questions',
        component: CssQuestionsComponent,
      },
      {
        path: 'javascript-questions',
        component: JavascriptQuestionsComponent,
      },
      {
        path: 'react-questions',
        component: ReactQuestionsComponent,
      },
      {
        path: 'angular-questions',
        component: AngularQuestionsComponent,
      },
      {
        path: 'git-questions',
        component: GitQuestionsComponent,
      },
      {
        path: 'sql-questions',
        component: SqlQuestionsComponent,
      },
      {
        path: 'nodejs-questions',
        component: NodejsQuestionsComponent,
      },
    ],
  },
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
