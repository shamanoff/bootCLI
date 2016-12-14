import {Component, OnInit} from '@angular/core';
import {Params, Router, ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-detail',
  template: `
    <h2>
      Detail Works! {{Id}}
    </h2>
    

  `,
  styles: []
})
export class DetailComponent implements OnInit {
 private id: number;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }
  get Id(){
  // this.route.params.switchMap((params: Params) => this.id = +params['id'].value);

    return +this.route.params['_value'].id;

  }
}
