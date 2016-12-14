import {Component, OnInit} from '@angular/core';
import {Params, Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-about',
  template: `
    <h1>
      About Works!
    </h1>
    <div class="row">
    <div class="medium-4 columns">
    <ul class="menu vertical">
 <li *ngFor="let url of urls" routerLinkActive="active">
 <a routerLink="/about/{{url.value}}" routerLinkActive="active">{{url.name}}</a>
 </li>
</ul>
</div>
    <div class="medium-8 columns">
    <router-outlet></router-outlet>
</div>
</div>
    <div class="row">
    <input (click)="main()" type="button" value="click">
</div>
  `,
  styles: []
})
export class About implements OnInit {
private urls:any[];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.urls = [{
      name: 'One',
      value: 1
    },
      {
        name: 'Two',
        value: 2
      },
      {
        name: 'Three',
        value: 3
      },
      {
        name: 'Four',
        value: 4
      }

    ]
  }

  ngOnInit() {

  }

  main() {
    this.router.navigate(['./']);
  }
}
