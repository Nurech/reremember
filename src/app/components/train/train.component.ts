import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export const trainMap = [
  {id: 0},
  {id: 1, items: []}
];
