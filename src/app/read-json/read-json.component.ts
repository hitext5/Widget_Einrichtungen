import {Component, OnInit} from '@angular/core';

import mode from '../FileJson/powers.json';
import {FacilityDetail} from "../FacilityDetail";

@Component({
  selector: 'app-read-json',
  templateUrl: './read-json.component.html',
  styleUrls: ['./read-json.component.css']
})
export class ReadJsonComponent implements OnInit {
  test: FacilityDetail = mode;

  constructor() {
  }

  ngOnInit(): void {
    //for (let i = 0; i < mode.length; i++) {
   //   this.test.push(mode);
   // }
  }
}
