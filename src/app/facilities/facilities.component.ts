import { Component, OnInit} from '@angular/core';
import { Facility } from '../facility';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  facilities: Facility[] = [];
  order = "asc"

  constructor(private facilityService: FacilityService) {
  }

    ngOnInit(): void {
    this.getFacilities();
  }

  getFacilities(): void {
    this.facilityService.getFacilities()
      .subscribe(facilities => {
        this.facilities = facilities;
      });
  }


  // TODO Hinzufügen
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.facilityService.addFacility({name} as Facility)
      .subscribe(facility => {
        this.facilities.push(facility);
      });
  }

  delete(facility: Facility): void {
    this.facilities = this.facilities.filter(h => h !== facility);
    this.facilityService.deleteFacility(facility.name).subscribe();
  }

  toggleOrder(): void {
    this.order = this.order == "asc" ? "desc" : "asc"
  }
}
