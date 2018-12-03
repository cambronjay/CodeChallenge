import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private question1 = `
  private checkNullOrEmpty(value: string): string {
    if (!!value) {
      return 'You are a valid string!'
    } else {
      return 'You are not a valid string!'
    }
  }
  `;
  private question2 = `
  private runDivisorsGenerate(){
    let testDisplay = [];
    let c = 0;
    let i;
    for(i = 1; i <= this.test2; i++){
      c = this.test2/i;
      if(c === Math.floor(c)){
        testDisplay.push(i); 
      }
    }
    this.answer2 = testDisplay;
}
  `;
  private question3 = `
  private calculateTriangle(): void {
    if(this.isTriangle(this.test3)){
      let side1 = this.test3[0];
      let side2 = this.test3[1];
      let side3 = this.test3[2];
      let perimeter = this.test3.reduce(this.getArraySum)/2;
      let area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
      this.answer3 = String(area);
    } else {
      this.answer3 = 'Invalid Triangle.';
    }
  }

  private getArraySum(total, num){
      return total + num;
  }

  private isTriangle(sides): boolean {
    let isTrianlge = true;
    sides.forEach((side, index, array) => {
      if (side <= 0){
        isTrianlge = false;
      };
      let nextSide = array.slice();
      nextSide.splice(index, 1);
      if (side >= nextSide.reduce((a, b) => {return a + b})) {
        isTrianlge = false;
      }
    });
    return isTrianlge;
  }
  `;
  private question4 = `
  private findMostCommonNumbers(){
    let keepCount = {};
    this.test4.forEach(function (a) {
      keepCount[a] = (keepCount[a] || 0) + 1;
    });
    let countObjects = Object.keys(keepCount).reduce(function (r, k, i) {
        if (!i || keepCount[k] > keepCount[r[0]]) {
            return [k];
        }
        if (keepCount[k] === keepCount[r[0]]) {
            r.push(k);
        }
        return r;
    }, []);
    this.answer4 = String(countObjects);
  }`;
  private answer1: Array<string> = [];
  private test1: Array<any> = [null, undefined, '', 'Am I a string?'];
  private answer2: Array<any> = [];
  private test2: any = 60;
  private answer3: string;
  private test3: Array<any> = [3, 4, 5];
  private answer4: string;
  private test4: Array<any> = [5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4];
  constructor() { }

  private runStringCheck(): void {
    let i;
    let testDisplay = [];
    for (i = 0; i < this.test1.length; i++) {
      let test = this.checkNullOrEmpty(this.test1[i]);
      let testName = this.test1[i];
      let testNameEval = String(testName) == '' ? 'Empty String' : String(testName);
      let testResult = testNameEval + ': ' + test;
      testDisplay.push(testResult);
    }
    this.answer1 = testDisplay;
  }

  private checkNullOrEmpty(value: string): string {
    if (!!value) {
      return 'You are a valid string!'
    } else {
      return 'You are not a valid string!'
    }
  }

  private runDivisorsGenerate(): void {
    let testDisplay = [];
    let c = 0;
    let i;
    for (i = 1; i <= this.test2; i++) {
      c = this.test2 / i;
      if (c === Math.floor(c)) {
        testDisplay.push(i);
      }
    }
    this.answer2 = testDisplay;
  }

  private calculateTriangle(): void {
    if (this.isTriangle(this.test3)) {
      let side1 = this.test3[0];
      let side2 = this.test3[1];
      let side3 = this.test3[2];
      let perimeter = this.test3.reduce(this.getArraySum) / 2;
      let area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
      this.answer3 = String(area);
    } else {
      this.answer3 = 'Invalid Triangle.';
    }
  }

  private getArraySum(total, num) {
    return total + num;
  }

  private isTriangle(sides): boolean {
    let isTrianlge = true;
    sides.forEach((side, index, array) => {
      if (side <= 0) {
        isTrianlge = false;
      };
      let nextSide = array.slice();
      nextSide.splice(index, 1);
      if (side >= nextSide.reduce((a, b) => { return a + b })) {
        isTrianlge = false;
      }
    });
    return isTrianlge;
  }

  private findMostCommonNumbers(): void {
    let keepCount = {};
    this.test4.forEach(function (a) {
      keepCount[a] = (keepCount[a] || 0) + 1;
    });
    let countObjects = Object.keys(keepCount).reduce(function (r, k, i) {
      if (!i || keepCount[k] > keepCount[r[0]]) {
        return [k];
      }
      if (keepCount[k] === keepCount[r[0]]) {
        r.push(k);
      }
      return r;
    }, []);
    this.answer4 = String(countObjects);
  }


}
