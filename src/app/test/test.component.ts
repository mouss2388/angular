import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <h2>
                Welcome {{name}}
              </h2>
              <h2 [style.color] = "hasError ? 'red' : 'green'">Style Binding 1</h2>
              <h2 [style.color] = "highlightColor">Style Binding  2</h2>
              <h2 [ngStyle] = "titleStyles">Style Binding 3</h2>

              `
  ,
  styles: [`
        `]
})
export class TestComponent implements OnInit {

  public name = 'Codevolution';

  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public highlightColor = 'orange';
  constructor() { }

  public titleStyles = {
    color: 'blue',
    fontStyle : 'italic'
  };

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

}
