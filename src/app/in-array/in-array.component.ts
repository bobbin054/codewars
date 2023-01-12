import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-array',
  templateUrl: './in-array.component.html',
  styleUrls: ['./in-array.component.css'],
})
export class InArrayComponent {
  // Example 1:
  a1 = ['arp', 'live', 'strong'];
  a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
  // returns ["arp", "live", "strong"]

  // Example 2:
  a3 = ['tarp', 'mice', 'bull'];
  a4 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
  result: any;
  // returns []

  constructor() {
    this.result = this.inArray(this.a1, this.a2);
  }

  inArray(a1: string[], a2: string[]): string[] {
    return (
      a1.map((string1) => {
        if (a2.find((string2) => string2.includes(string1))) {
          return string1;
        }
      }) as string[]
    )
      .filter((x) => x !== undefined)
      .sort((a, b) => {
        return a < b ? -1 : 1;
      });
  }
}
