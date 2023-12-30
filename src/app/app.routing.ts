import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { TeamComponent } from './team/team.component';
const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "about", component: AboutComponent },
{ path: "services", component: ServicesComponent },
{ path: "contact", component: ContactComponent },
{ path: "blog", component: BlogComponent },
{ path: "team", component: TeamComponent },
{ path: "", component: HomeComponent }]
export const routing = RouterModule.forRoot(routes);