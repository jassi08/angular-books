import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  private name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Hardy Boys';
  }

}
