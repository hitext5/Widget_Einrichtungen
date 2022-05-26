import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FacilityService } from '../facility.service';
import { Facility } from '../facility';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {
  @Input() facility?: Facility;

  constructor(
    private route: ActivatedRoute,
    private facilityService: FacilityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.gerFacility();
  }

  gerFacility(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.facilityService.getFacility(id)
      .subscribe(facility => this.facility = facility);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.facility) {
      this.facilityService.updateFacility(this.facility)
        .subscribe(() => this.goBack());
    }
  }
}
