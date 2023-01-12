import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-number-generator',
  templateUrl: './prime-number-generator.component.html',
  styleUrls: ['./prime-number-generator.component.scss'],
})
export class PrimeNumberGeneratorComponent {
  public primeNumbers: number[] = [];
  private intervalId!: number;
  constructor() {}
  
  startPrimeGenerator() {
   let currentNumber = 1;
    this.intervalId = setInterval(() => {
      currentNumber = currentNumber + 2;
      const isPrime = (number: number) => {
        if (number === 1) {
          return false;
        } else if (number > 1) {
          for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              return false;
            }
          }
        }
        return true;
      };
      if (isPrime(currentNumber)) {
        this.primeNumbers = [...this.primeNumbers, currentNumber];
      }
    }, 1);
  }

  pausePrimeGenerator() {
    clearInterval(this.intervalId);
  }
}
