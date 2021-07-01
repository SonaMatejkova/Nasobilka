import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss'],
})
export class MultiplesComponent implements OnInit {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numberIsSelected: boolean = false;
  selectedNumber: number = 0;

  selectNumber(number: number): number {
    this.numberIsSelected = true;
    this.selectedNumber = number;
    return this.selectedNumber;
  }

  constructor() {}

  ngOnInit(): void {}
}
