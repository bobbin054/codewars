import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-in-array',
  templateUrl: './array-in-arrary.component.html',
  styleUrls: ['./array-in-array.component.css'],
})
export class ArrayInArrayComponent {
  public numberArray1 = [1, 2, 3, 4];
  public numberArray2 = [1, 2, 3];

  public objNumberArr1 = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }];
  public objNumberArr2 = [{ num: 1 }, { num: 2 }, { num: 3 }];

  public setDiffObj() {
    return this.objNumberArr1.filter(
      ({ num: id1 }) => !this.objNumberArr2.some(({ num: id2 }) => id2 === id1)
    );
   
  }

  public setDifference(arr1, arr2) {
    return arr1.filter((x) => !arr2.includes(x));
  }
}
