import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  private book: Book;

  constructor() { }

  ngOnInit() {
    this.book = new Book('Piran Da paraga', 'Shiv Kumar', 200.00);
  }

}
