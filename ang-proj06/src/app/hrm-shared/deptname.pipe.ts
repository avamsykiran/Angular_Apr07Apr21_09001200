import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { DeptsService } from '../hrm-services/depts.service';

@Pipe({
  name: 'deptname'
})
export class DeptnamePipe implements PipeTransform {

  constructor(private deptService : DeptsService){

  }

  transform(deptid: number): Observable<string> {
    let title=null;
    return this.deptService.getById(deptid).pipe(
      map ( d => d.title)
    );
  }

}
