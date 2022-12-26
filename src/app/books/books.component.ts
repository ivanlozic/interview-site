import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getAllBooks()
    
  }

  getAllBooks(): void {
    this.service.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
        console.log(books)
      },
      error: (err: any) => alert(err),
    });
  }
}
