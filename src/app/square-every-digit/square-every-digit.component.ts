import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-every-digit',
  templateUrl: './square-every-digit.component.html',
  styleUrls: ['./square-every-digit.component.css'],
})
export class SquareEveryDigitComponent implements OnInit {
  public input = 9119;
  public result = this.squareDigits(this.input);
  constructor() {}

  ngOnInit() {}

  squareDigits(num: number): number {
    return +Array.from(num.toString())
      .map((digit) => {
        return Math.pow(+digit, 2);
      })
      .join('');
  }
}
