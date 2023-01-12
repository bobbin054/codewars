import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-of-numbers',
  templateUrl: './sum-of-numbers.component.html',
  styleUrls: ['./sum-of-numbers.component.css'],
})
export class SumOfNumbersComponent {
  public input: { a: number; b: number }[] = [
    { a: 1, b: 0 },
    { a: 1, b: 2 },
  ];
  public result: any;

  constructor() {
    this.result = this.input.map((i) => {
      return this.getSum(i.a, i.b);
    });
  }

  getSum(a: number, b: number): number {
    let result = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    for (min; min <= max; min++) {
      result += min;
    }
    return result;
  }
}
