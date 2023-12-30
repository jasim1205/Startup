import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Service } from '../service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  public service?: Service[];
 

	constructor(private apiService: ApiService) {
		this.apiService.readService().subscribe((service: Service[])=>{
			this.service = service;
		})
		
	}
 
}

