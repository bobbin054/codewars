import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer-errors',
  templateUrl: './printer-errors.component.html',
  styleUrls: ['./printer-errors.component.css'],
})
export class PrinterErrorsComponent {
  public input: string[] = ['aaabbbbhaijjjm', 'aaaxbbbbyyhwawiwjjjwwm'];
  public result: any;
  constructor() {
    this.result = this.input.map((i) => {
      return this.printerError(i);
    });
  }

  printerError(s: string) {
    const errors = Array.from(s)
      .map((c) => {
        if (c.search('^[a-mA-M]+$')) {
          return 1;
        }
      })
      .join('');
    return errors.length + '/' + s.length;
  }
}
