import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from "./app-routing.module";
import {IndexComponent} from "./index/index.component";


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
		  HttpClientModule,
		  RouterTestingModule,
		 
      ],
		providers: [IndexComponent],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('组件初始化', () => {
    //  创建组件并解析V层代码
    // 创建一个夹具，该夹具中实例化了一个AppComponent对象
    const fixture = TestBed.createComponent(AppComponent);
    // 获取夹具中的AppComponent对象
    const app = fixture.componentInstance;
    // 预测上述过程没有发生错误，即成功获取到了AppComponent对象
    //  当组件被成功初始化时，以下语句正常执行；失败时，以下语句将报一个异常
    expect(app).toBeTruthy();


    // 启用angular的自动变更检测机制，自动对V层中的数据进行渲染
    fixture.autoDetectChanges();
  });
});
