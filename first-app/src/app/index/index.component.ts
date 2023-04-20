import { Component, OnInit } from '@angular/core';
import {Teacher} from "../entity/teacher";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	
	login = false;
	
  constructor() { }

  ngOnInit(): void {
	  //获取缓存中的login ,能获取到设置login为true
	  if (window.sessionStorage.getItem('login') != null ) {
		  this.login = true;
	  }
	  else {
		  this.login =false;
	  }
	  
  }
  
  onLogin(teacher: Teacher): void {
	  console.log(new Date().toTimeString(),'子组件进行了空数据弹射', teacher);
	  this.login = true;
	  //登陆状态写入缓存
	  window.sessionStorage.setItem('login', 'true');
  }
  onLogout(): void {
	  console.log('被appcomponent调用');
	  window.sessionStorage.removeItem('login');
	  console.log(window.sessionStorage.getItem('login'));
	  this.ngOnInit();
  }
}
