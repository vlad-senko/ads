import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  public typeActiveFilter: BehaviorSubject<string> = new BehaviorSubject<
    string
  >('by-site');
  public secondLevelActiveFilter: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public dateRangeActiveFilter: BehaviorSubject<string> = new BehaviorSubject<
    string
  >('yesterday');
  public reset = new Subject();

  constructor() {}

  public setTypeFilter(value: string): void {
    this.typeActiveFilter.next(value);
    this.reset.next(void 0);
  }

  public setSecondLevelFilter(value: string): void {
    this.secondLevelActiveFilter.next(value);
    this.reset.next(void 0);
  }

  public setDateRangeFilter(value: string): void {
    this.dateRangeActiveFilter.next(value);
    this.reset.next(void 0);
  }
}
