export interface Facility {
  id: number;
  name: string;
  oeffnungszeiten: [
    montag: [mo1: string, mo2: string],
    dienstag: [di1: string, di2: string],
    mittwoch: [mi1: string, mi2: string],
    donnerstag: [do1: string, do2: string],
    freitag: [fr1: string, fr2: string]]
  ansprechpartner: string;
  telefonnummer: number;
}
