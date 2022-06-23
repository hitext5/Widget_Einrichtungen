import {Component, OnInit} from '@angular/core';
import {Facility} from '../facility';
import {FacilityService} from '../facility.service';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  facilities: Facility[] = [];
  order = "asc"
  onlyShowOpenFacilities = false;
  opendFacilities: Facility[] = []
  showErrorFacility: boolean = false;

  constructor(
    private facilityService: FacilityService,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getFacilities();
  }

  getFacilities(): void {
    this.facilityService.getFacilities()
      .subscribe(facilities => {
        this.facilities = facilities;
        this.getOpenFacilities();
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      this.showErrorFacility = true;
    }
    else this.facilityService.addFacility({
      id: this.facilities.length + 1,
      counter: 0,
      name: name,
      oeffnungszeiten: {montag: [], dienstag: [], mittwoch: [], donnerstag: [], freitag: []},
      ansprechpartner: "Frau/Herr Mustermann",
      telefonnummer: 123,
      imageName: "testbild"
    } as Facility)
      .subscribe(facility => {
        this.facilities.push(facility);
        this.getFacilities();
      });
  }

  delete(facility: Facility): void {
    this.facilities = this.facilities.filter(h => h !== facility);
    this.facilityService.deleteFacility(facility.id).subscribe();
  }

  toggleOrder(): void {
    this.order = this.order == "asc" ? "desc" : "asc"
  }

  getOpenFacilities(): void {
    const weekday: string[] = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag"]
    for (const element of this.facilities) {
      const today = new Date().getDay();
      // @ts-ignore
      if (this.checkIfOpen(element.oeffnungszeiten[weekday[today - 1]])) {
        this.opendFacilities.push(element);
      }
    }
  }

  checkIfOpen(oeffnungszeiten: string[]): boolean {
    const currentDate = new Date();
    for (let i = 0; i < 2; i++) {
      try {
        const morningTimeArray = oeffnungszeiten[i].split(" - ");
        let startTime = morningTimeArray[0];
        let endTime = morningTimeArray[1];

        let startDate = new Date(currentDate.getTime()); // now
        startDate.setHours(Number.parseInt(startTime.split(":")[0]));
        startDate.setMinutes(Number.parseInt(startTime.split(":")[1]));

        let endDate = new Date(currentDate.getTime());
        endDate.setHours(Number.parseInt(endTime.split(":")[0]));
        endDate.setMinutes(Number.parseInt(endTime.split(":")[1]));
        if (startDate < currentDate && endDate > currentDate) {
          return true;
        }
      } catch (e) {
        if (e instanceof TypeError) {
        } else {
          this.messageService.add('Caught unexpected error ${e}')
        }
      }
    }
    return false
  }
}
