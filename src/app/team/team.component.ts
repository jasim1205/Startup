import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Team } from '../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
 
  public team?: Team[];
  

	constructor(private apiService: ApiService) {
		
		this.apiService.readTeam().subscribe((team: Team[])=>{
			this.team = team;
		})
		
	}
 
}
