import { Component, OnInit } from '@angular/core';
import { Facility } from '../facility';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-topSearched',
  templateUrl: './topSearched.component.html',
  styleUrls: [ './topSearched.component.css' ]
})
export class TopSearchedComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.getFacilities();
  }

  getFacilities(): void {
    this.facilityService.getFacilities()
      .subscribe(facilities => this.facilities = facilities.slice(1, 5));
  }
}

