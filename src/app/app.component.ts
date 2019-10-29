import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAct1-Blog';



  	PostListItemComponent = [
		{
			title: "Titre1",
			content: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sollicitudin quam. Sed non vestibulum ex. Curabitur vitae mauris id velit eleifend semper at id ante. Donec ut orci varius, malesuada eros ut, commodo eros. In hendrerit mattis suscipit. Nulla lacinia tincidunt mauris, a rutrum ligula mollis quis. Quisque est enim, pulvinar eleifend lacinia vitae, vehicula in nisi. Nunc facilisis laoreet arcu, eu commodo diam rutrum non. Maecenas imperdiet ultricies velit sit amet elementum.",
			loveIts: 1,
			created_at: new Date()
		},
		{
			title: "Titre2",
			content: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sollicitudin quam. Sed non vestibulum ex. Curabitur vitae mauris id velit eleifend semper at id ante. Donec ut orci varius, malesuada eros ut, commodo eros. In hendrerit mattis suscipit. Nulla lacinia tincidunt mauris, a rutrum ligula mollis quis. Quisque est enim, pulvinar eleifend lacinia vitae, vehicula in nisi. Nunc facilisis laoreet arcu, eu commodo diam rutrum non. Maecenas imperdiet ultricies velit sit amet elementum.",
			loveIts: 5,
			created_at: new Date()
		},
		{
			title: "Titre3",
			content: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sollicitudin quam. Sed non vestibulum ex. Curabitur vitae mauris id velit eleifend semper at id ante. Donec ut orci varius, malesuada eros ut, commodo eros. In hendrerit mattis suscipit. Nulla lacinia tincidunt mauris, a rutrum ligula mollis quis. Quisque est enim, pulvinar eleifend lacinia vitae, vehicula in nisi. Nunc facilisis laoreet arcu, eu commodo diam rutrum non. Maecenas imperdiet ultricies velit sit amet elementum.",
			loveIts: -5,
			created_at: new Date()
		}
	];


	constructor(){}

}
	
