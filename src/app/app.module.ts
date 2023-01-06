import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './core/contact/contact.component';
import { BooksComponent } from './books/books.component';
import { CoursesComponent } from './courses/courses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { RandomPickerComponent } from './questions/random-picker/random-picker.component';
import { HtmlQuestionsComponent } from './questions/html-questions/html-questions.component';
import { CssQuestionsComponent } from './questions/css-questions/css-questions.component';
import { AngularQuestionsComponent } from './questions/angular-questions/angular-questions.component';
import { JavascriptQuestionsComponent } from './questions/javascript-questions/javascript-questions.component';
import { ReactQuestionsComponent } from './questions/react-questions/react-questions.component';
import { SqlQuestionsComponent } from './questions/sql-questions/sql-questions.component';
import { GitQuestionsComponent } from './questions/git-questions/git-questions.component';
import { NodejsQuestionsComponent } from './questions/nodejs-questions/nodejs-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    BooksComponent,
    CoursesComponent,
    QuestionsComponent,
    RandomPickerComponent,
    HtmlQuestionsComponent,
    CssQuestionsComponent,
    AngularQuestionsComponent,
    JavascriptQuestionsComponent,
    ReactQuestionsComponent,
    SqlQuestionsComponent,
    GitQuestionsComponent,
    NodejsQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
