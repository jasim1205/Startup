import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Service } from '../service';
import { Team } from '../team';
import { Blog } from '../blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public service?: Service[];
  public team?: Team[];
  public blog?: Blog[];

	constructor(private apiService: ApiService) {
		this.apiService.readService().subscribe((service: Service[])=>{
			this.service = service;
		})
		this.apiService.readTeam().subscribe((team: Team[])=>{
			this.team = team;
		})
		this.apiService.readBlog().subscribe((blog: Blog[])=>{
			this.blog = blog;
		})
	}
 
}
