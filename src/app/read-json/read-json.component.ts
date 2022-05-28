import {Component, OnInit} from '@angular/core';

import mode from 'src/assets/jsonFiles/powers.json';
import {FacilityDetail} from "../FacilityDetail";

@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.css']
})
export class ReadJsonComponent implements OnInit {
  test: FacilityDetail = mode;

  // TODO mode als List mit i nach jeweiliger facility filtern
  // TODO oder variabler import möglich?
  // TODO oder alles in memory data?

  constructor() {
  }

  ngOnInit(): void {
    //for (let i = 0; i < mode.length; i++) {
   //   this.test.push(mode);
   // }
  }
}
