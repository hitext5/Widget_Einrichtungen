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

  saveOeffnungszeiten(oeffnungszeiten: string): void {

    if (this.facility) {
      this.facilityService.updateFacility(this.facility)
        .subscribe(() => this.goBack());
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
}
