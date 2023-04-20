
import {HttpClient} from "@angular/common/http";
import { Component, OnInit} from '@angular/core';
import {IndexComponent} from "./index/index.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	
  teachers = [] as Teacher[];
	
  constructor(private httpClient: HttpClient,
  			private  indexComponent: IndexComponent) {
    console.log(httpClient);
  }
  ngOnInit(): void {
    this.httpClient.get<Teacher[]>('http://angular.api.codedemo.club:81/teacher')
      .subscribe(teachers => this.teachers = teachers);
  }
  
  onDelete(id: number): void {
	  const url = `http://angular.api.codedemo.club:81/teacher/${id}`;
	  this.httpClient.delete(url)
		  .subscribe(() => this.ngOnInit(),
			  error => console.log('删除失败',error));
  }
  onLogout(): void {
	 this.indexComponent.onLogout();
  }
}
type Teacher = {
	id: number,
	name: string,
	username: string,
	email: string,
	sex: true
};