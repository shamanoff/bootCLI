import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { About } from './about/about.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./routerConfig";
import { Home } from './home/home.component';
import {Team} from "./team/team.component";
import { ArticlesComponent } from './articles/articles.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    Team,
    About,
    Home,
    ArticlesComponent,
    EditComponent,
    DetailComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
