import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiples-solution',
  templateUrl: './multiples-solution.component.html',
  styleUrls: ['./multiples-solution.component.scss'],
})
export class MultiplesSolutionComponent implements OnInit {
  @Input() x = 0;

  y: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
