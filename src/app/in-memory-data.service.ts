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
          montag: ['09:00 - 14:00', '17:00 - 22:00'],
          dienstag: ['09:00 - 14:00', '17:00 - 22:00'],
          mittwoch: ['09:00 - 14:00', '17:00 - 22:00'],
          donnerstag: ['09:00 - 14:00', '17:00 - 22:00'],
          freitag: ['09:00 - 13:00', '']
        },
        ansprechpartner: 'Frau Patricia Brandl',
        telefonnummer: '089 605969',
        imageName: 'testbild'
      },
      {
        id: 2, counter: 0, name: 'UniCasino',
        oeffnungszeiten: {
          montag: ['11:00 - 14:30', '18:00 - 22:00'],
          dienstag: ['11:00 - 14:30', '18:00 - 22:00'],
          mittwoch: ['11:00 - 14:30', '18:00 - 22:00'],
          donnerstag: ['11:00 - 14:30', '18:00 - 22:00'],
          freitag: ['', '']
        },
        ansprechpartner: 'UniCasino',
        telefonnummer: '+49 (0)89 6004-2685',
        imageName: 'testbild'
      },
      {
        id: 3, counter: 0, name: 'Mensa',
        oeffnungszeiten: {
          montag: ['06:30 - 08:15', '10:45 - 13:30'],
          dienstag: ['06:30 - 08:15', '10:45 - 13:30'],
          mittwoch: ['06:30 - 08:15', '10:45 - 13:30'],
          donnerstag: ['06:30 - 08:15', '10:45 - 13:30'],
          freitag: ['06:30 - 08:15', '16:00 - 18:00']
        },
        ansprechpartner: 'Mensa',
        telefonnummer: '089-34382835',
        imageName: 'testbild'
      },
      {
        id: 4, counter: 0, name: 'Friseur',
        oeffnungszeiten: {
          montag: ['07:30 - 16:15'],
          dienstag: ['07:30 - 16:15'],
          mittwoch: ['07:30 - 16:15'],
          donnerstag: ['07:30 - 16:15'],
          freitag: ['07:30 - 12:15']
        },
        ansprechpartner: 'Ellis Campus Friseur',
        telefonnummer: '089-60042093',
        imageName: 'testbild'
      },
      {
        id: 5, counter: 0, name: 'LHBw',
        oeffnungszeiten: {
          montag: [''],
          dienstag: ['08:00 - 12:00'],
          mittwoch: ['13:00 - 15:00'],
          donnerstag: [''],
          freitag: ['08:00 - 12:00']
        },
        ansprechpartner: 'Frau Dietrich',
        telefonnummer: '089-60042781',
        imageName: 'testbild'
      },
      {
        id: 6, counter: 0, name: 'Universitätsbibliothek',
        oeffnungszeiten: {
          montag: ['09:00 - 18:00'],
          dienstag: ['09:00 - 18:00'],
          mittwoch: ['09:00 - 18:00'],
          donnerstag: ['09:00 - 18:00'],
          freitag: ['09:00 - 16:00']
        },
        ansprechpartner: 'Universitätsbibliothek',
        telefonnummer: '089-60043311',
        imageName: 'testbild'
      },
      {
        id: 7, counter: 0, name: 'SanVersZ',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '13:00 - 16:00'],
          dienstag: ['09:00 - 12:00', '13:00 - 16:00'],
          mittwoch: ['07:15 - 12:00', '13:00 - 16:00'],
          donnerstag: ['07:15 - 12:00'],
          freitag: ['07:15 - 12:00'],
        },
        ansprechpartner: 'SanVersZ',
        telefonnummer: '089-60044950',
        imageName: 'testbild'
      },
      {
        id: 8, counter: 0, name: 'Schwimmhalle',
        oeffnungszeiten: {
          montag: ['09:00 - 20:00'],
          dienstag: ['09:00 - 20:00'],
          mittwoch: ['09:00 - 20:00'],
          donnerstag: ['09:00 - 20:00'],
          freitag: ['09:00 - 18:00'],

        },
        ansprechpartner: 'Angelika Ketzer',
        telefonnummer: '+49-8960044161',
        imageName: 'testbild'
      },
      {
        id: 9, counter: 1, name: 'Fitnessanlage',
        oeffnungszeiten: {
          montag: ['06:30 - 24:00'],
          dienstag: ['06:30 - 24:00'],
          mittwoch: ['06:30 - 24:00'],
          donnerstag: ['06:30 - 24:00'],
          freitag: ['06:30 - 24:00']
        },
        ansprechpartner: 'Angelika Ketzer',
        telefonnummer: '+49-8960044161 ',
        imageName: 'testbild'
      },
      {
        id: 10, counter: 1, name: 'Wäschekammer',
        oeffnungszeiten: {
          montag: ['07:00 - 11:00', '12:00 - 15:00'],
          dienstag: ['07:00 - 11:00', '12:00 - 15:00'],
          mittwoch: ['07:00 - 11:00', '12:00 - 15:00'],
          donnerstag: ['07:00 - 11:00', '12:00 - 15:00'],
          freitag: ['07:00 - 11:00']
        },
        ansprechpartner: 'Wäschekammer',
        telefonnummer: '089-60042786',
        imageName: 'testbild'
      },
      {
        id: 11, counter: 2, name: 'Rechenzentrum',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '13:00 - 15:00'],
          dienstag: ['08:00 - 12:00', '13:00 - 15:00'],
          mittwoch: ['09:00 - 12:00', '13:00 - 15:00'],
          donnerstag: ['08:00 - 12:00', '13:00 - 15:00'],
          freitag: ['08:00 - 12:00']
        },
        ansprechpartner: 'Rechenzentrum',
        telefonnummer: '+49-8960045555 ',
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
        ansprechpartner: 'Corona-Testzentrum',
        telefonnummer: '089-3495238523',
        imageName: 'testbild'
      },
      {
        id: 13, counter: 1, name: 'Poststelle',
        oeffnungszeiten: {
          montag: ['07:30 - 11:00', '12:00 - 15:00'],
          dienstag: ['07:30 - 11:00', '12:00 - 15:00'],
          mittwoch: ['07:30 - 11:00', '12:00 - 15:00'],
          donnerstag: ['07:30 - 11:00', '12:00 - 15:00'],
          freitag: ['07:30 - 11:00']
        },
        ansprechpartner: 'Poststelle',
        telefonnummer: '089-3482942342',
        imageName: 'testbild'
      },
      {
        id: 14, counter: 0, name: 'PAUS/LRA/Fotostelle',
        oeffnungszeiten: {
          montag: ['08:00 - 11:00', '13:00 - 15:00'],
          dienstag: ['08:00 - 11:00', '13:00 - 15:00'],
          mittwoch: ['08:00 - 11:00'],
          donnerstag: ['08:00 - 11:00', '13:00 - 15:00'],
          freitag: ['08:00 - 12:00']
        },
        ansprechpartner: 'PAUS/LRA/Fotostelle',
        telefonnummer: '089-60044670',
        imageName: 'testbild'
      },
      {
        id: 15, counter: 0, name: 'Sportförderverein',
        oeffnungszeiten: {
          montag: ['15:00 - 18:00'],
          dienstag: ['15:00 - 18:00'],
          mittwoch: ['15:00 - 18:00'],
          donnerstag: ['14:00 - 17:00'],
          freitag: ['']
        },
        ansprechpartner: 'Sportförderverein',
        telefonnummer: '089-60044159',
        imageName: 'testbild'
      },
      {
        id: 16, counter: 0, name: 'Rechnungsführer',
        oeffnungszeiten: {
          montag: ['08:00 - 12:00', '13:00 - 15:00'],
          dienstag: ['08:00 - 12:00', '13:00 - 15:00'],
          mittwoch: ['09:00 - 12:00', '13:00 - 15:00'],
          donnerstag: ['08:00 - 12:00', '13:00 - 15:00'],
          freitag: ['08:00 - 12:00']
        },
        ansprechpartner: 'Rechnungsführer',
        telefonnummer: '089-60045555',
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
