import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements OnInit {
  @Input() columns;
  @Input() data;

  constructor() {}

  ngOnInit(): void {}
}
