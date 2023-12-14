export interface Time {
  hours: number;
  minutes: number;
}

export class Plan {
  private nazwa: string;
  private godz_rozpoczecia: Time | string;
  private godz_zakonczenia: Time | string;
  constructor(nazwa: string, godz_rozpoczecia: Time  | string, godz_zakonczenia: Time | string) {
    this.nazwa = nazwa;
    this.godz_rozpoczecia = godz_rozpoczecia;
    this.godz_zakonczenia = godz_zakonczenia;
  }

  get _nazwa(): string { return this.nazwa; }
  set _nazwa(value: string) { this.nazwa = value; }

  get _godz_rozpoczecia(): Time | string { return this.godz_rozpoczecia; }
  set _godz_rozpoczecia(value: Time) { this.godz_rozpoczecia = value; }

  get _godz_zakonczenia(): Time | string { return this.godz_zakonczenia; }
  set _godz_zakonczenia(value: Time) { this.godz_zakonczenia = value; }
}
