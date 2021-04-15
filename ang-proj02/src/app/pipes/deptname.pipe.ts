import { Pipe, PipeTransform } from '@angular/core';
import { DeptService } from '../service/dept.service';

@Pipe({
  name: 'deptname'
})
export class DeptnamePipe implements PipeTransform {

  constructor(private deptService : DeptService){

  }

  transform(deptid: number): string {
    console.log(deptid + " is received")
    let dept = this.deptService.getById(deptid);
    console.log(JSON.stringify(dept));
    return dept==null?'':dept.title;
  }

}
