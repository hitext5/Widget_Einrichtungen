import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";

import {NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityDetailComponent } from './facility-detail/facility-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { TopSearchedComponent } from './topSearched/topSearched.component';
import { FacilitySearchComponent } from './facility-search/facility-search.component';
import { OrderByPipe } from "./OrderByPipe";

import { MatIconModule } from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";

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
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgxMaterialTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// TODO css in corporate Design der Uni (orangener Hintergrund)
// TODO html
