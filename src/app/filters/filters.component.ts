import { Component, OnInit, OnDestroy } from '@angular/core';
import { FiltersService } from './../filters.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  public typeFilterOptions = [
    { name: 'Site name', value: 'by-site' },
    { name: 'State', value: 'by-state' },
  ];
  public secondLevelFilterOptions = [
    { name: 'Form name', value: 'by-form-name' },
    { name: 'Referral', value: 'by-referral' },
  ];
  public dateRangeFilterOptions = [
    { name: 'yesterday', value: 'yesterday' },
    { name: 'Last week', value: 'last-week' },
  ];

  public currentTypeFilter: string;
  public currentSecondLevelFilter: string;
  public currentDateRangeFilter: string;

  private componentAlive = true;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.filtersService.typeActiveFilter
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe((filter) => (this.currentTypeFilter = filter));

    this.filtersService.secondLevelActiveFilter
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe((filter) => (this.currentSecondLevelFilter = filter));

    this.filtersService.dateRangeActiveFilter
      .pipe(takeWhile(() => this.componentAlive))
      .subscribe((filter) => (this.currentDateRangeFilter = filter));
  }

  ngOnDestroy() {
    this.componentAlive = false;
  }

  public typeFilterChanged(e: any): void {
    this.filtersService.setTypeFilter(e.target.value);
  }

  public secondLevelFilterChanged(e: any): void {
    this.filtersService.setSecondLevelFilter(e.target.value);
  }

  public dateRangeFilterChanged(e: any): void {
    this.filtersService.setDateRangeFilter(e.target.value);
  }
}
