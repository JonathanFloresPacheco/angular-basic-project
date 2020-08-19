import { Component } from '@angular/core';
import { WordpressService } from './services/wordpress.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$:Observable<any[]>;
  title = 'angular-basic-project';
  constructor(private wp:WordpressService){    
    // this.posts$ = this.wp.getPosts();
  }
}
