import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1>
      About Works!
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class About implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
