import {Routes} from "@angular/router";
import {ArticlesComponent} from "./articles/articles.component";
import {EditComponent} from "./edit/edit.component";
import {DetailComponent} from "./detail/detail.component";

export const AB_ROUTES: Routes = [
  // {path: '', component: ArticlesComponent},
  {path: '', redirectTo:'1', pathMatch: 'full'},
  {path: 'new', component:EditComponent},
  {path: ':id', component:DetailComponent},
  {path: ':id/edit', component:EditComponent}

];
