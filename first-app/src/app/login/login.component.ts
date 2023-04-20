import {Component, OnInit, EventEmitter, Output, NgZone} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppComponent} from "../app.component";
import {IndexComponent} from "../index/index.component";
import {Teacher} from "../entity/teacher";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	teacher = {} as Teacher;
	//注解：该属性用于向父组件弹射数据
	@Output()
	beLogin = new EventEmitter<Teacher>();
	
	/**
	 * 是否显示错误信息
	 * @param httpClient
	 */
	showError = false;
  constructor(private httpClient: HttpClient, private ngZone: NgZone) {
	 
  }

  ngOnInit(): void {
	 
  }
  
  onSubmit(): void {
	console.log('你点击了按钮');
	//const authString = this.teacher.username + ':' + this.teacher.password;
	//将UTF-16中占2个字节的编码变换为变1个字节的ASSCI
	const authString = encodeURIComponent(this.teacher.username) + ':' +this.teacher.password;
	console.log(authString);
	//对authString进行加密
	const authToken = btoa(authString);
	console.log(authToken);
	let httpHeaders = new HttpHeaders();
	//进行解码
	httpHeaders = httpHeaders.append('Authorization', 'Basic ' + authToken);
	 
	this.httpClient
		.get<Teacher>(
			'http://angular.api.codedemo.club:81/teacher/login',
			{headers: httpHeaders}).subscribe(teacher=> this.beLogin.emit(teacher),
		error => {
				console.log('发生错误, 登录失败', error);
				this.showErrorDelat();
		});
	
  }
	
	/**
	 * 延迟显示错误信息
	 */
	showErrorDelat(): void {
		this.showError = true;
		this.ngZone.run(() => {
			setTimeout(() => {
				console.log('1.5秒后触发');
				this.showError = false;
			}, 1500);
		});
	}
}
