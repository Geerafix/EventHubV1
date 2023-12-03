export class Plan {
  private nazwa: string;
  private godz_rozpoczecia: Date;
  private godz_zakonczenia: Date;
  constructor(nazwa: string, godz_rozpoczecia: Date, godz_zakonczenia: Date) {
    this.nazwa = nazwa;
    this.godz_rozpoczecia = godz_rozpoczecia;
    this.godz_zakonczenia = godz_zakonczenia;
  }

  get _nazwa(): string { return this.nazwa; }
  set _nazwa(value: string) { this.nazwa = value; }

  get _godz_rozpoczecia(): Date { return this.godz_rozpoczecia; }
  set _godz_rozpoczecia(value: Date) { this.godz_rozpoczecia = value; }

  get _godz_zakonczenia(): Date { return this._godz_zakonczenia; }
  set _godz_zakonczenia(value: Date) { this._godz_zakonczenia = value; }
}
