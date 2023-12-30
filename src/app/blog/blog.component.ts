import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  public blog?: Blog[];
  constructor(private apiService: ApiService) {
		this.apiService.readBlog().subscribe((blog: Blog[])=>{
			this.blog = blog;
		})
	}
}

