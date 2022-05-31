import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityDetailComponent } from './facility-detail/facility-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { TopSearchedComponent } from './topSearched/topSearched.component';
import { FacilitySearchComponent } from './facility-search/facility-search.component';
import {OrderByPipe} from "./OrderByPipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    FacilityDetailComponent,
    TopSearchedComponent,
    FacilitySearchComponent,
    OrderByPipe
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// TODO css
// TODO html
// TODO aktualisierungsfeature (save button anpassen)
// TODO counter für Top
