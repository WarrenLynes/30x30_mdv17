import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, Observable, of, Subject } from 'rxjs';
import { AuthFacade } from '@mdv17/core-state';
import { CustomValidators } from '../custom-validators';
import { takeUntil } from 'rxjs/operators';

enum loginSteps {
  'EMAIL',
  'PASSWORD'
}

@Component({
  selector: 'mdv17-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  loginForm: FormGroup;
  step: loginSteps = loginSteps.EMAIL;

  constructor(private facade: AuthFacade,) {
    this.buildForm();
  }

  ngOnInit() {
    fromEvent(document, 'keypress')
      .pipe(takeUntil(this.destroy$))
      .subscribe(e => {
        console.log(e);
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.unsubscribe();
  }

  submit() {
    this.facade.authenticate(this.loginForm.value);
  }

  buildForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      name: new FormControl('', Validators.compose([
        Validators.minLength(3),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
      ]))
    });
  }
}
