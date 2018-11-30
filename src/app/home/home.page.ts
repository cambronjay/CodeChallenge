import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private stringForm: FormGroup;
  private stringCheckResult: string;
  private question1 = `
  export model = new Model({
    a:1,
    b:function(){}
  })
  `;
  private answer1: Array<string> = [];
  private test1 = [null, undefined, '', 'Am I a string?'];
  constructor(private formBuilder: FormBuilder) {

  }

  private runStringCheckSamples():void {
    let i;
    for (i = 0; i < this.test1.length; i++) { 
        let test = this.checkNullOrEmpty(this.test1[i]);
        let testName = this.test1[i];
        let testResult = String(testName) + ':' + test;
        this.answer1.push(testResult);
    }
    console.log(this.answer1)
  }

  private checkNullOrEmpty(value: string): string {
    if (!!value) {
      return 'You are a string!'
    } else {
      return 'You are not a string!'
    }
  }

  ngOnInit() {
    // this.stringForm = this.formBuilder.group({
    //   'stringInput': ['', [Validators.required, Validators.pattern('[A-Za-z0-9]'), Validators.minLength(1)]],
    // });
  }

  ngAfterViewInit() {
    // this.stringForm
    //   .valueChanges
    //   .pipe(
    //     distinctUntilChanged(),
    //     debounceTime(500)
    //   )
    //   .subscribe(formValues => {
    //    this.stringCheckResult = this.checkNullOrEmpty(formValues.stringInput);
    //   });
  }
}
