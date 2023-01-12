import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complementary-dna',
  templateUrl: './complementary-dna.component.html',
  styleUrls: ['./complementary-dna.component.css'],
})
export class ComplementaryDNAComponent {
  public input = ['ATTGC', 'GTAT'];
  public output: any;

  constructor() {
    this.output = this.input.map((i) => {
      return this.dnaStrand(i);
    });
  }

  dnaStrand(dna: string) {
    return dna.split('').map((char) => {
      console.log(char)
      if (char === 'A') {
        return 'T';
      } else if (char === 'T') {
        return 'A';
      } else if (char === 'C') {
        return 'G';
      } else if (char === 'G') {
        return 'C';
      }
      return char;
    }).join("");
  }
}
