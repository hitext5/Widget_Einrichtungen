import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Facility } from '../facility';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-facility-search',
  templateUrl: './facility-search.component.html',
  styleUrls: [ './facility-search.component.css' ]
})
export class FacilitySearchComponent implements OnInit {
  facilities$!: Observable<Facility[]>;

  private searchTerms = new Subject<string>();
  constructor(private facilityService: FacilityService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.facilities$ = this.searchTerms.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.facilityService.searchFacilities(term)),
    );
  }
}
