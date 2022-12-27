import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../model/book';
import { Message } from '../model/contact-message';

const booksURL = 'http://localhost:3000/api/books';
const messageURL = 'http://localhost:3000/api/messages';
const questionsURL = 'http://localhost:3000/api/allQuestions';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBooks(params?:any): Observable<Book[]> {

    let options = {}

    if(params) {
      options = {
        params: new HttpParams()
        .set('page', params.page || '')
        .set('pageSize', params.pageSize || '')
      }
    }

    return this.http.get(booksURL,options).pipe(
      map((data: any) => {
        return data.map((elem: any) => new Book(elem));
      })
    );
  }


  postMessage(content:Message):Observable<Message>{
    return this.http.post(messageURL,content).pipe(map((elem:any)=> {
      return new Message(elem)
    }))
  }


  getAllQuestions():Observable<any>{
    return this.http.get(questionsURL)
  }
}
