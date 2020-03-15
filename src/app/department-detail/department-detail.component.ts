import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>you selected departmentt with id {{departmentId}}</h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   let id;
   /**
    * Use this example for get param id from url
    * id = Number(this.route.snapshot.paramMap.get('id'));
    */
  //
  /**
   * Or use example below
   */
   this.route.params.subscribe(params => id = Number(params.id));
   this.departmentId = id;
  }

}
