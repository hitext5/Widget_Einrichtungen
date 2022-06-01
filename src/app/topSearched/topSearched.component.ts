import {Component, OnInit} from '@angular/core';
import {Facility} from '../facility';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-topSearched',
  templateUrl: './topSearched.component.html',
  styleUrls: ['./topSearched.component.css']
})
export class TopSearchedComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getFacilities();
  }

    getFacilities(): void {
      this.facilityService.getFacilities()
        .subscribe(facilities => {
          this.facilities = facilities;
          this.facilities.sort((a: any, b: any) => {
            if (a.counter< b.counter) {
              return 1;
            } else if (a.counter > b.counter) {
              return -1;
            } else {
              return 0;
            }
          });
          this.facilities = this.facilities.slice(0, 4);
        })
    }
}
