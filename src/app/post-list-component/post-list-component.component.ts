import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {


	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postDate: Date;
	@Input() postLoveIt: number;





  constructor() { }

  ngOnInit() {
  }

  loveItplus(){
  		this.postLoveIt = this.postLoveIt +1;
  }

  loveItmoins(){
  		this.postLoveIt = this.postLoveIt -1;
  }

}
