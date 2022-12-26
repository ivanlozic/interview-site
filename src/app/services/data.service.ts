import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../model/book';
import { Message } from '../model/contact-message';

const booksURL = 'http://localhost:3000/api/books';
const messageURL = 'http://localhost:3000/api/messages';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get(booksURL).pipe(
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
}
