export interface Facility {
  id: number;
  name: string;
  oeffnungszeiten: {
    montag: string[],
    dienstag: string[],
    mittwoch: string[],
    donnerstag: string[],
    freitag: string[]};
  ansprechpartner: string;
  telefonnummer: number;
  imageName: string;
}
