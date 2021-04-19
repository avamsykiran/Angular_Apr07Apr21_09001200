import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { DeptService } from '../service/dept.service';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'deptname'
})
export class DeptnamePipe implements PipeTransform {

  constructor(private deptService : DeptService){

  }

  transform(deptid: number): Observable<string> {
    let title=null;
    return this.deptService.getById(deptid).pipe(
      map ( d => d.title)
    );
  }

}
