import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpinWordsComponent } from './spin-words/spin-words.component';
import { SquareEveryDigitComponent } from './square-every-digit/square-every-digit.component';
import { TimeComponent } from './time/time.component';
import { PrimeNumberGeneratorComponent } from './prime-number-generator/prime-number-generator.component';
import { ComplementaryDNAComponent } from './complementary-dna/complementary-dna.component';
import { SumOfNumbersComponent } from './sum-of-numbers/sum-of-numbers.component';
import { StringEndsWithComponent } from './string-ends-with/string-ends-with.component';
import { PrinterErrorsComponent } from './printer-errors/printer-errors.component';
import { InArrayComponent } from './in-array/in-array.component';
import { ArrayInArrayComponent } from './array-in-array/array-in-array.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SpinWordsComponent,
    SquareEveryDigitComponent,
    TimeComponent,
    PrimeNumberGeneratorComponent,
    ComplementaryDNAComponent,
    SumOfNumbersComponent,
    StringEndsWithComponent,
    PrinterErrorsComponent,
    InArrayComponent,
    ArrayInArrayComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
