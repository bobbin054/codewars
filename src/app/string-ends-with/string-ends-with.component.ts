import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-ends-with',
  templateUrl: './string-ends-with.component.html',
  styleUrls: ['./string-ends-with.component.css'],
})
export class StringEndsWithComponent {
  public input: { str: string; ending: string }[] = [
    { str: 'abc', ending: 'bc' },
    { str: 'abc', ending: 'd' },
  ];
  public result: any;
  constructor() {
    this.result = this.input.map((i) => {
      return this.solution(i.str, i.ending);
    });
  }

  solution(str: string, ending: string): boolean {
    return str.endsWith(ending);
  }
}
