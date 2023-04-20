import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from "@angular/forms";
import { AddComponent } from './add.component';
import { HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "../app.component";
import {RouterTestingModule} from "@angular/router/testing";
import {AppRoutingModule} from "../app-routing.module";
import {IndexComponent} from "../index/index.component";

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddComponent,
		IndexComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule,
		RouterTestingModule
      ],
		providers: [
			AppComponent,
			IndexComponent
		]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
