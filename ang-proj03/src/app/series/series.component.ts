import { Component } from '@angular/core';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  lb: number;
  ub: number;
  err: string;
  result: number[];
  isJobInProgress: boolean;
  squared: boolean;
  evened: boolean;

  constructor(private seriesService: SeriesService) {
    this.lb = 0;
    this.ub = 0;
    this.isJobInProgress = false;
    this.squared = false;
    this.evened = false;
  }

  formSubmited() {
    this.isJobInProgress = true;
    this.result = [];
    this.err = null;

    let obr = null;
    
    if (this.squared && this.evened)
      obr = this.seriesService.generateEvenSquaredSeries(this.lb, this.ub);
    else if (this.squared)
      obr = this.seriesService.generateSquaredSeries(this.lb, this.ub);
    else if (this.evened)
      obr = this.seriesService.generateEvenSeries(this.lb, this.ub);
    else
      obr = this.seriesService.generateSeries(this.lb, this.ub);

    obr.subscribe(
      (num) => { this.result.push(num); },
      (err) => { this.err = err; this.isJobInProgress = false; },
      () => { this.isJobInProgress = false; }
    );
  }
}
