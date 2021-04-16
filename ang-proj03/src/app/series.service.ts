import { Injectable } from '@angular/core';
import { generate, Observable, Observer } from 'rxjs';
import { map,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  generateSeries(lb: number, ub: number) : Observable<number>{

    let seriesJob = (observer: Observer<number>) => {
      if(lb>ub){
        observer.error("Invalid boundaries.");
        return;
      }

      let n = lb;

      let handle = setInterval(()=>{
        observer.next(n);
        n++;
        if(n>ub){
          observer.complete();
          clearInterval(handle);
        }
      },500);
    };

    return new Observable(seriesJob);
  }

  generateSquaredSeries(lb: number, ub: number) : Observable<number>{
    let oldObr = this.generateSeries(lb,ub);
    return oldObr.pipe(
      map(x => x*x)
    );
  }

  generateEvenSeries(lb: number, ub: number) : Observable<number>{
    let oldObr = this.generateSeries(lb,ub);
    return oldObr.pipe(
      filter(x => x%2==0)
    );
  }

  generateEvenSquaredSeries(lb: number, ub: number) : Observable<number>{
    let oldObr = this.generateSeries(lb,ub);
    return oldObr.pipe(
      filter(x => x%2==0),
      map(x => x*x)
    );
  }

}
