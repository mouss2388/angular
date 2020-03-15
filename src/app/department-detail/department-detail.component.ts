import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>you selected departmentt with id {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: number;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

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
   this.route.params.subscribe(params => {
                    id = Number(params.id);
                    this.departmentId = id; } );

  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const previousId = this.departmentId + 1;
    this.router.navigate(['/departments', previousId]);
  }

}
