import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {FacilityService} from '../facility.service';
import {Facility} from '../facility';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {
  @Input() facility?: Facility;
  weekdays: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private facilityService: FacilityService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getFacility();
  }

  getFacility(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.facilityService.getFacility(name)
      .subscribe(facility => {
        this.facility = facility;
        this.weekdays = facility.oeffnungszeiten;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(name: string, age: number, secretIdentity: string): void {

    // TODO prüfen, ob name einen Wert hat, wenn ja übergeben, ansonsten alten Wert behalten

    if (this.facility) {
      this.facilityService.updateFacility(this.facility)
        .subscribe(() => this.goBack());
    }
  }
}
