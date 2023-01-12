import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spin-words',
  templateUrl: './spin-words.component.html',
  styleUrls: ['./spin-words.component.css'],
})
export class SpinWordsComponent implements OnInit {
  public input = 'Hey fellow warriors'
  public result = this.spinWords(this.input);
  constructor() {}

  ngOnInit() {}
  spinWords(words: string) {
    return words
      .split(' ')
      .map((word) => {
        if (word.length >= 5) return word.split('').reverse().join('');
        return word
      })
      .join(' ');
  }
}
