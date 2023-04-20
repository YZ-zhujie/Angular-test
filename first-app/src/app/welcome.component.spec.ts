import {TestBed} from "@angular/core/testing";
import {WelcomeComponent} from "./welcome.component";

describe('welcome', () => {
	it(' create', () => {
		// 配置动态测试模块
		TestBed.configureTestingModule({
			declarations: [WelcomeComponent]
		}).compileComponents();
		
		//??
		const welcomComponent = TestBed.createComponent(WelcomeComponent);
		expect(welcomComponent).toBeTruthy();
	});
});
