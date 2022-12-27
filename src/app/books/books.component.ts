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


  params = {
    page: 1,
    pageSize: 4
  }

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks(): void {
    this.service.getBooks(this.params).subscribe({
      next: (books: Book[]) => {
        this.books = books;
        console.log(books)
      },
      error: (err: any) => alert(err),
    });
  }

  onPageChange(page:number):void{
    this.params.page = page
    this.getAllBooks()
  }

}
