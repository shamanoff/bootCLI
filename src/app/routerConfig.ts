import {Routes, RouterModule} from '@angular/router';
import {About} from "./about/about.component";
import {Team} from "./team/team.component";
import {Home} from "./home/home.component";
import {AB_ROUTES} from "./aboutRoutes";




export const APP_ROUTES: Routes = [
  {path: ' ',component: Home},
  {path:  'home', component: Home},
  {path: 'team', component: Team, pathMatch: 'full'},
  {path: 'about', component: About, children: AB_ROUTES},

];

/*export const routing = RouterModule.for$
{
  Root | Child
}
(routes);*/

// export const routedComponents = [Team];
