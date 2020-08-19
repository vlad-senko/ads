import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../data.service';
import { GridView } from '../interfaces/gridView';
import { FiltersService } from '../filters.service';
import { combineLatest, interval, timer, Subject } from 'rxjs';
import { switchMap, takeWhile, tap, filter, startWith } from 'rxjs/operators';
import { AdGroup } from '../interfaces/adGroup';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
  public data: GridView[];
  private componentAlive = true;
  constructor(
    private dataService: DataService,
    private filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.filtersService.reset
      .pipe(
        startWith(void 0),
        switchMap(() => timer(0, 30 * 1000)),
        switchMap(() =>
          combineLatest([
            this.filtersService.dateRangeActiveFilter,
            this.filtersService.typeActiveFilter,
          ])
        ),
        switchMap(([dateRange, type]) =>
          this.dataService.getCampaigns(type, dateRange)
        ),
        takeWhile(() => this.componentAlive)
      )
      .subscribe(
        (data) =>
          (this.data = data.map((item) => {
            return new GridView(item);
          }))
      );

    this.filtersService.reset
      .pipe(
        startWith(void 0),
        switchMap(() => timer(0, 30 * 1000)),
        switchMap(() =>
          combineLatest([
            this.filtersService.dateRangeActiveFilter,
            this.filtersService.secondLevelActiveFilter,
          ])
        ),
        filter(([dateRange, secondLevel]) => !!secondLevel),
        switchMap(([dateRange, secondLevel]) =>
          this.dataService.getAdGroups(secondLevel, dateRange)
        ),
        takeWhile(() => this.componentAlive)
      )
      .subscribe(
        (response) =>
          (this.data = this.data.map((campaign) => {
            return new GridView(
              campaign,
              response.map((group) => new AdGroup(group))
            );
          }))
      );
  }

  ngOnDestroy(): void {
    this.componentAlive = false;
  }
}
