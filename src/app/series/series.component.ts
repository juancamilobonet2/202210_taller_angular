import { Component, OnInit } from '@angular/core';
import { Serie } from './series';
import { SerieService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];
  avgSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.avgSeasons = this.getAvgSeasons(series);
    })
  }

  getAvgSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    let avgSeasons: number = totalSeasons/(series.length);
    return avgSeasons;
  }

  ngOnInit() {
    this.getSeries();
  }

}
