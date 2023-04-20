import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {AppComponent} from "../app.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {
  teacher = {
    name: '',
    username: '',
    email: '',
    sex: true
  };

  constructor(private httpClient:HttpClient,
			  private router: Router
			  ) {

  }

  ngOnInit(): void {
     this.httpClient.get('http://angular.api.codedemo.club:81/teacher')
      .subscribe(() => {}, (error) => { console.log('请求失败',error);});
  }

  onSubmit(): void {
    console.log(this.teacher);
    this.httpClient.post('http://angular.api.codedemo.club:81/teacher',this.teacher)
      .subscribe((result) => {
        console.log('接到返回的数据', result),
		  this.goBack();
      }, (error) =>  {console.log('请求失败', error);});

  }
	
	/**
	 * 返回上一级
	 */
	goBack() {
		this.router.navigate(['/teacher']);
	}
	
}
