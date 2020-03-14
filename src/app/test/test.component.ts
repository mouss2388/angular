import { Component, OnInit } from '@angular/core';

@Component({
  /**
   * So your example of '1.2-2' means:
   * A minimum of 1 digit will be shown before decimal point
   * It will show at least 2 digits after decimal point
   * But not more than 2 digits
   */
  selector: 'app-test',
  template: `
      <h2>A) {{name}}</h2>
      <h2>B) {{name | lowercase}}</h2>
      <h2>C) {{name | uppercase}}</h2>
      <h2>D) {{message | titlecase}}</h2>
      <h2>E) {{name | slice:3:5}}</h2>
      <h2>F) {{person | json}}</h2>

      <h2>{{5.678 | number: '1.2-3'}}</h2>
      <h2>{{5.678 | number: '3.1-5'}}</h2>
      <h2>{{5.678 | number: '3.1-2'}}</h2>


      <h2>{{0.25 | percent}}</h2>
      <h2>{{99.99 | currency}}</h2>
      <h2>{{99.99 | currency: 'GBP'}}</h2>
      <h2>{{99.99 | currency: 'EUR'}}</h2>

      <h2>{{date}}</h2>
      <h2>{{date | date:'short'}}</h2>
      <h2>{{date | date:'shortDate'}}</h2>
      <h2>{{date | date:'shortTime'}}</h2>





  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = 'Codevolution';
  public message = 'welcome to codevolution';
  public person = {
    firstName: 'John',
    lastName: 'Doe'
  };

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
