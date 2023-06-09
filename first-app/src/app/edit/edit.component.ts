import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	
	

  //默认public
  //public teacher: any;
  //= 后面跟的是值
  //as后面跟的是类型。
  teacher = {} as {
    name: string,
    username: string,
    email: string,
    sex: boolean
  };
  constructor(private activeRoute: ActivatedRoute,
              private httpClient: HttpClient,
			  private router:Router
              ) {

  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params.id;
    console.log('获取的路由参数id值是', id);

    // 拼接请求URL
    const url = 'http://angular.api.codedemo.club:81/teacher/' + id;
    // 发起请求，成功时并打印请求结果，失败时打印失败结果
    this.httpClient.get<{ name: string, username: string, email: string, sex: boolean }>(url)
      .subscribe(data => this.teacher = data,

       error => console.log('失败', error)
      );
  }

  onSubmit(): void {
    console.log(this.teacher);
    // 获取ID，拼接URL
    const url = 'http://angular.api.codedemo.club:81/teacher/' +
    this.activeRoute.snapshot.params.id;
    // 发起请求，更新教师，成功时打印请求结果并刷新教师列表查看效果，失败时打印失败结果
    this.httpClient.put(url, this.teacher)
      .subscribe(data => {
          console.log('更新成功', data),
          // 在此调用教师列表App组个的ngOnInit方法，即可实现更新后重新刷新教师列表的功能
          this.goBack();
        },
        error => console.log('更新错误', error) )
  }
	
	goBack() {
		this.router.navigate(['/teacher']);
	}
}
