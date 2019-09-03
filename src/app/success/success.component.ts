import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  template:`
  <p> You are successful </p>`,
  styles:[
    `
    p {
      padding: 20px;
      background-color:lightgreen;
      border: 1px solid green;

    }
    `
  ]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}