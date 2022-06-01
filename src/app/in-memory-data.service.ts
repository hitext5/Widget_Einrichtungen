import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Facility} from './facility';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const facilities = [
      {
        id: 1,
        counter: 0,
        name: 'Brandl',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 2, counter: 0, name: 'UniCasino',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 3, counter: 0, name: 'Mensa',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 4, counter: 0, name: 'Friseur',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 5, counter: 0, name: 'LHBw',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 6, counter: 0, name: 'Universitätsbibliothek',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 7, counter: 0, name: 'SanVersZ',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 8, counter: 0, name: 'Schwimmhalle',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 9, counter: 1, name: 'Fitnessanlage',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 10, counter: 1, name: 'Wäschekammer',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 11, counter: 2, name: 'Rechenzentrum',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 12, counter: 1, name: 'Corona-Testzentrum',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 13, counter: 1, name: 'Poststelle',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 14, counter: 0, name: 'PAUS/LRA/Fotostelle',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 15, counter: 0, name: 'Sportförderverein',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
      {
        id: 16, counter: 0, name: 'Rechnungsführer',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '15:00 - 18:00'],
          dienstag: ['08:00 - 12:00', '15:00 - 18:00'],
          mittwoch: ['08:00 - 12:00', '15:00 - 18:00'],
          donnerstag: ['08:00 - 12:00', '15:00 - 18:00'],
          freitag: ['08:00 - 12:00', '15:00 - 18:00']
        },
        ansprechpartner: 'Frau Test',
        telefonnummer: '0123456789',
        imageName: 'testbild'
      },
    ];
    return {facilities};
  }

  //TODO Counter in Interface ergänzen und danach die ersten vier anzeigen

  genId(facilities: Facility[]): number {
    return facilities.length > 0 ? Math.max(...facilities.map(facility => facility.id)) + 1 : 11;
  }
}
