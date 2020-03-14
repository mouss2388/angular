import { Component, OnInit } from '@angular/core';


@Component({
  /**
   * You can also set local variables for the following
   * exported values: index, first, last, even and odd
   */
  selector: 'app-test',
  template: `

          <div *ngFor="let color of colors; index as i">
            <h2>{{i}} {{color}}</h2>
          </div>
              `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ['red', 'blue', 'green', 'yellow'];
  constructor() { }

  ngOnInit() {
  }

}
