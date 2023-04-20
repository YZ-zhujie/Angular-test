
// 使用注解来标明它是一个组件
import {Component} from "@angular/core";

// 使用注解来标明它是一个组件
// 使用selector来定义关键字，其它的组件在V层中使用app-welcome来加载该组件
@Component({
	selector: 'app-welcome',
	template: `<h1 class="text-center text-success mt-5 pt-5">欢迎使用由软小白开发的教务管理系统</h1>`
})

// 定义类,加入export使其他类能够使用文件引用
export class WelcomeComponent {

}

// 将组件加入模块
// 为组件设置一个selector，以使得其它组件能够使用它
// 为组件设置V层模板
// 新建个测试文件来测试组件