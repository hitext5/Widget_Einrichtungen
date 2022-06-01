import {Component, Input, OnInit} from '@angular/core';
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
  selectedDay: string = '';
  myTimePickerMorningFrom: string = '';
  myTimePickerMorningTo: string = '';
  myTimePickerAfternoonFrom: string = '';
  myTimePickerAfternoonTo: string = '';

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
        this.facility.counter = this.facility.counter +1;
        this.facilityService.updateFacility(this.facility)
          .subscribe();
      });
  }

  goBack(): void {
    this.location.back();
  }

  saveName(name: string): void {
    if (this.facility) {
      if (name.trim().length != 0 && this.facility.name != name.trim()) {
        this.facility.name = name.trim();
        this.facilityService.updateFacility(this.facility)
          .subscribe(() => this.goBack());
      }
    }
  }


  //TODO speichert nicht wieso? erst alle Wochentage überschrieben, dann keine Änderungen mehr
  saveOeffnungszeiten(): void {
    if (this.facility) {
      // if (this.selectedDay != '' && this.myDatePickerFrom != '' && this.myDatePickerTo != '')
      // auskommentiert, da eventuell Öffnungszeiten nicht vormittags oder nachmittags angeboten werden
      if (this.selectedDay == 'Montag') {
        this.facility.oeffnungszeiten.montag.splice(0, 1, this.myTimePickerMorningFrom + ' - ' + this.myTimePickerMorningTo);
        this.facility.oeffnungszeiten.montag.splice(1, 1, this.myTimePickerAfternoonFrom + ' - ' + this.myTimePickerAfternoonTo);
        console.log("Montag");
        this.facilityService.updateFacility(this.facility)
          .subscribe(() => this.goBack());
      } else if (this.selectedDay == 'Dienstag') {
        this.facility.oeffnungszeiten.dienstag.splice(0, 1, this.myTimePickerMorningFrom + ' - ' + this.myTimePickerMorningTo);
        this.facility.oeffnungszeiten.dienstag.splice(0, 1, this.myTimePickerAfternoonFrom + ' - ' + this.myTimePickerAfternoonTo);
        console.log(this.myTimePickerMorningTo);
        this.facilityService.updateFacility(this.facility)
          .subscribe(() => this.goBack());
      } else if (this.selectedDay == 'Mittwoch') {
        this.facility.oeffnungszeiten.mittwoch.splice(0, 1, this.myTimePickerMorningFrom + ' - ' + this.myTimePickerMorningTo);
        this.facility.oeffnungszeiten.mittwoch.splice(0, 1, this.myTimePickerAfternoonFrom + ' - ' + this.myTimePickerAfternoonTo);
        console.log("Mittwoch");
        this.facilityService.updateFacility(this.facility)
          .subscribe(() => this.goBack());
      } else if (this.selectedDay == 'Donnerstag') {
        this.facility.oeffnungszeiten.donnerstag.splice(0, 1, this.myTimePickerMorningFrom + ' - ' + this.myTimePickerMorningTo);
        this.facility.oeffnungszeiten.donnerstag.splice(0, 1, this.myTimePickerAfternoonFrom + ' - ' + this.myTimePickerAfternoonTo);
        console.log("Donnerstag");
        this.facilityService.updateFacility(this.facility)
          .subscribe(() => this.goBack());
      } else if (this.selectedDay == 'Freitag') {
        this.facility.oeffnungszeiten.freitag.splice(0, 1, this.myTimePickerMorningFrom + ' - ' + this.myTimePickerMorningTo);
        this.facility.oeffnungszeiten.freitag.splice(0, 1, this.myTimePickerAfternoonFrom + ' - ' + this.myTimePickerAfternoonTo);
        console.log("Freitag");
        this.facilityService.updateFacility(this.facility)
          .subscribe(() => this.goBack());
      }
    }
  }

  saveAnsprechpartner(ansprechpartner: string): void {
    if (this.facility) {
      if (ansprechpartner.trim().length != 0 && this.facility.ansprechpartner != ansprechpartner.trim()) {
        this.facility.ansprechpartner = ansprechpartner.trim();
        this.facilityService.updateFacility(this.facility)
          .subscribe(() => this.goBack());
      }
    }
  }

  saveTelefonnummer(telefonnummer: string): void {
    if (this.facility) {
      // Regex um zu prüfen, ob die Telefonnummer nur aus Zahlen besteht (Leerzeichen werden von !Number().isNaN nicht erkannt)
      if (telefonnummer.length != 0 && Number(telefonnummer.replace(/\D/g, '')) == Number(telefonnummer.trim()) && this.facility.telefonnummer != Number(telefonnummer.trim())) {
        this.facility.telefonnummer = Number(telefonnummer);
        this.facilityService.updateFacility(this.facility)
          .subscribe(() => this.goBack());
      }
    }
  }

  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
}
