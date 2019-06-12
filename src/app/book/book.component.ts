import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  private books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getAll();
  }

  deleteBook(i: number) {
    this.books = this.bookService.delete(i);
  }
}
