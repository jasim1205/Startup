import { Injectable } from '@angular/core';
import { Service } from './service';
import { Team } from './team';
import { Blog } from './blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	PHP_API_SERVER = "http://localhost/angularcrud/api";
	constructor(private httpClient: HttpClient) {}
	readService(): Observable<Service[]>{
		return this.httpClient.get<Service[]>(`${this.PHP_API_SERVER}/service.php`);
	}
	readTeam(): Observable<Team[]>{
		return this.httpClient.get<Team[]>(`${this.PHP_API_SERVER}/team.php`);
	}
	readBlog(): Observable<Blog[]>{
		return this.httpClient.get<Blog[]>(`${this.PHP_API_SERVER}/blog.php`);
	}
}
