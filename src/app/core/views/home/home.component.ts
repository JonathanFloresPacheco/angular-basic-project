import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../../services/wordpress.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts$:Observable<any[]>;
  constructor(private wp:WordpressService){    
    this.posts$ = this.wp.getPosts();
  }

  ngOnInit(): void {
  }

}
