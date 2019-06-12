import { Injectable } from '@angular/core';
import { Book } from './book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  constructor() {
      this.books = [];
      this.books.push(new Book( 'Agnular', 'Harjeet', 300.00));
      this.books.push(new Book( 'Agnular1', 'Harjeet', 300.00));
      this.books.push(new Book( 'Agnular2', 'Harjeet', 300.00));
      this.books.push(new Book( 'Agnular3', 'Harjeet', 300.00));
      this.books.push(new Book( 'Agnular4', 'Harjeet', 300.00));
  }

    public getAll(): Book[] {
       return this.books;
    }

    public delete( i: number ): Book[] {
     this.books.splice( i, 1 );
     return this.books;

    }
  }
