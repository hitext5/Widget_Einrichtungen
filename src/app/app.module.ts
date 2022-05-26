import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityDetailComponent } from './facility-detail/facility-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { TopSearchedComponent } from './topSearched/topSearched.component';
import { FacilitySearchComponent } from './facility-search/facility-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    FacilityDetailComponent,
    TopSearchedComponent,
    FacilitySearchComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// TODO css
// TODO html
// TODO Zugriff auf Server
// TODO aktualisierungsfeature
// TODO counter für Top
// TODO Json daten laden  + img
