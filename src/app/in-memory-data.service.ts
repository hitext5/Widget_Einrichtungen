import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Facility } from './facility';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const facilities = [
      { id: 1, name: 'Brandl' },
      { id: 2, name: 'UniCasino' },
      { id: 3, name: 'Mensa' },
      { id: 4, name: 'Friseur' },
      { id: 5, name: 'LHBw' },
      { id: 6, name: 'Universitätsbibliothek' },
      { id: 7, name: 'SanVersZ' },
      { id: 8, name: 'Schwimmhalle' },
      { id: 9, name: 'Fitnessanlage' },
      { id: 10, name: 'Wäschekammer' },
      { id: 11, name: 'Rechenzentrum' },
      { id: 12, name: 'Corona-Testzentrum' },
      { id: 13, name: 'Poststelle' },
      { id: 14, name: 'PAUS/LRA/Fotostelle' },
      { id: 15, name: 'Sportförderverein' },
      { id: 16, name: 'Rechnungsführer' },
    ];
    return {facilities};
  }

  //TODO Counter in Interface ergänzen und danach die ersten vier anzeigen

  genId(facilities: Facility[]): number {
    return facilities.length > 0 ? Math.max(...facilities.map(facility => facility.id)) + 1 : 11;
  }
}
