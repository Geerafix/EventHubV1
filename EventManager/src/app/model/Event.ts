export class Event {
  private nazwa: string;
  private rodzaj: string;
  private organizator: string;
  private miejsce: string;
  private ilosc_osob: number;
  private max_ilosc_osob: number;
  private data_rozpoczecia: Date;
  private data_zakonczenia: Date;
  // private plan: Plan[];
  private cena_biletu: number;

  constructor(nazwa: string,
              rodzaj: string,
              organizator: string,
              miejsce: string,
              ilosc_osob: number,
              max_ilosc_osob: number,
              data_rozpoczecia: Date,
              data_zakonczenia: Date,
              /* plan: Plan[], */
              cena_biletu: number) {
    this.nazwa = nazwa;
    this.rodzaj = rodzaj;
    this.organizator = organizator;
    this.miejsce = miejsce;
    this.ilosc_osob = ilosc_osob;
    this.max_ilosc_osob = max_ilosc_osob;
    this.data_rozpoczecia = data_rozpoczecia;
    this.data_zakonczenia = data_zakonczenia;
    /* this.plan = plan; */
    this.cena_biletu = cena_biletu;
  }

  get _nazwa(): string { return this.nazwa; }
  set _nazwa(nazwa: string) { this.nazwa = nazwa; }

  get _rodzaj(): string { return this.rodzaj; }
  set _rodzaj(rodzaj: string) { this.rodzaj = rodzaj; }

  get _organizator(): string { return this.organizator; }
  set _organizator(value: string) { this.organizator = value; }

  get _miejsce(): string { return this.miejsce; }
  set _miejsce(value: string) { this.miejsce = value; }

  get _ilosc_osob(): number { return this.ilosc_osob; }
  set _ilosc_osob(value: number) { this.ilosc_osob = value; }

  get _max_ilosc_osob(): number { return this.max_ilosc_osob; }
  set _max_ilosc_osob(value: number) { this.max_ilosc_osob = value; }

  get _data_rozpoczecia(): Date { return this.data_rozpoczecia; }
  set _data_rozpoczecia(value: Date) { this.data_rozpoczecia = value; }

  get _data_zakonczenia(): Date { return this.data_zakonczenia; }
  set _data_zakonczenia(value: Date) { this.data_zakonczenia = value; }

  // get plan(): Plan[] { return this._plan; }
  // set plan(value: Plan[]) { this._plan = value; }

  get _cena_biletu(): number { return this.cena_biletu; }
  set _cena_biletu(cena_biletu: number) { this.cena_biletu = cena_biletu; }

}
