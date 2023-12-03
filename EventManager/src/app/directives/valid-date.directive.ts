import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  selector: '[validDateBirth]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidDateDirective,
    multi: true
  }],
  standalone: true
})

export class ValidDateDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    let birthDate = new Date(control.value);
    let diff = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
    if (birthDate >= diff) {
      return { 'validDateBirth': true };
    }
    return null;
  }
}
