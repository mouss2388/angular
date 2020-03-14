import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
        <h2>{{'Hello ' + name + ' from parent'}}</h2>
        <button (click)="fireEvent()">Send Event</button>
  ` ,
  styles: []
})
export class TestComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('parentData') public name;
  // tslint:disable-next-line:no-output-rename
  @Output('childData') public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit('Hey Codevolution from child');
  }

}
