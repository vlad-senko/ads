import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Column } from './../interfaces/column';
import { Campaign } from '../interfaces/campaign';
import { GridView } from '../interfaces/gridView';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() campaigns: GridView[];

  public secondLevelProperties: string[];

  public columns: Column[] = [
    { name: 'name', caption: 'Name' },
    { name: 'leads', caption: 'Leads' },
    { name: 'revenue', caption: 'Revenue' },
    { name: 'rpl', caption: 'RPL' },
  ];

  constructor() {}

  ngOnChanges(): void {
  }
}
