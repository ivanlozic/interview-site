import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../model/book';
import { Message } from '../model/contact-message';

const booksURL = 'https://interview-prep-site.onrender.com/api/books';
const messageURL = 'https://interview-prep-site.onrender.com/api/messages';
const questionsURL = 'https://interview-prep-site.onrender.com/api/allQuestions';

const baseUrl = 'https://interview-prep-site.onrender.com/api/';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBooks(params?: any): Observable<Book[]> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || ''),
      };
    }

    return this.http.get(booksURL, options).pipe(
      map((data: any) => {
        return data.map((elem: any) => new Book(elem));
      })
    );
  }

  postMessage(content: Message): Observable<Message> {
    return this.http.post(messageURL, content).pipe(
      map((elem: any) => {
        return new Message(elem);
      })
    );
  }

  //Questions
  getAllQuestions(): Observable<any> {
    return this.http.get(questionsURL);
  }

  getHtmlQuestions(): Observable<any> {
    return this.http.get(baseUrl + 'html-questions');
  }

  getCSSQuestions(): Observable<any> {
    return this.http.get(baseUrl + 'css-questions');
  }

  getJavaScriptQuestions(): Observable<any> {
    return this.http.get(baseUrl + 'javascript-questions');
  }

  getReactQuestions(): Observable<any> {
    return this.http.get(baseUrl + 'react-questions');
  }

  getAngularQuestions(): Observable<any> {
    return this.http.get(baseUrl + 'angular-questions');
  }

  getGitQuestions(): Observable<any> {
    return this.http.get(baseUrl + 'git-questions');
  }
}
