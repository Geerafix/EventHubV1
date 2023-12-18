import { Time } from '@angular/common';

export class Plan {
  constructor(
    private nazwa: string,
    private godz_rozpoczecia: Time | string,
    private godz_zakonczenia: Time | string
  ) {}

  get _nazwa(): string {
    return this.nazwa;
  }

  set _nazwa(value: string) {
    this.nazwa = value;
  }

  get _godz_rozpoczecia(): Time | string {
    return this.godz_rozpoczecia;
  }

  set _godz_rozpoczecia(value: Time) {
    this.godz_rozpoczecia = value;
  }

  get _godz_zakonczenia(): Time | string {
    return this.godz_zakonczenia;
  }

  set _godz_zakonczenia(value: Time) {
    this.godz_zakonczenia = value;
  }
}
