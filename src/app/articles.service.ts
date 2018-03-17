import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ArticlesService {

    constructor (private _http: Http) {}
	
    
	//Articles:Array<any> =[];
    Url = "assets/articles.json";
     getArticles(): Promise<any>{
		 
         return  new Promise<any[]>((resolve, reject) => { 
			this._http.get(this.Url).map(resp => resp.json())
			.subscribe(
			resp => {
			resolve(resp);
			console.log(resp);
			},
			err => {
				console.log(err);
				reject(err);
			});
		});  
     }

}



	
	
	
	
	
	
	
	
	
