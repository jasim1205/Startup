import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { TeamComponent } from './team/team.component';
import { TypewriterComponent } from './typewriter/typewriter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    BlogComponent,
    TeamComponent,
    TypewriterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
