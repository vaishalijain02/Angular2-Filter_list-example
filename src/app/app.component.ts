import { Component } from '@angular/core';
import {ArticlesService} from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	data: Array<any>;
	query:string;
	filterToggle:number =0;
	constructor(private articlesService : ArticlesService){
	this.articlesService.getArticles()
		.then(
		(val) => {
			this.data = val;
		});
	}
	toggle(){
	 document.getElementById("myDropdown").classList.toggle("show");
	}
    settoggle(arg) {
	this.filterToggle=arg;
	document.getElementById("myDropdown").classList.toggle("show");

    }
}
