import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { FiltersComponent } from './filters/filters.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    FiltersComponent,
    TableComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
