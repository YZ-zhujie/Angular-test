import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	@Output()
	beLogot = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
	  this.beLogot.emit(undefined);
  }
}
