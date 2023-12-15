import { Plan } from "./Plan";

export class Event {
  constructor(
    private id: number,
    private nazwa: string,
    private rodzaj: string,
    private organizator: string,
    private miejsce: string,
    private ilosc_osob: number,
    private max_ilosc_osob: number,
    private data_wydarzenia: Date,
    private plan: Plan[],
    private cena_biletu: number
  ) {}

  get _id(): number { return this.id; }
  set _id(value: number) { this.id = value; }

  get _nazwa(): string { return this.nazwa; }
  set _nazwa(value: string) { this.nazwa = value; }

  get _rodzaj(): string { return this.rodzaj; }
  set _rodzaj(value: string) { this.rodzaj = value; }

  get _organizator(): string { return this.organizator; }
  set _organizator(value: string) { this.organizator = value; }

  get _miejsce(): string { return this.miejsce; }
  set _miejsce(value: string) { this.miejsce = value; }

  get _ilosc_osob(): number { return this.ilosc_osob; }
  set _ilosc_osob(value: number) { this.ilosc_osob = value; }

  get _max_ilosc_osob(): number { return this.max_ilosc_osob; }
  set _max_ilosc_osob(value: number) { this.max_ilosc_osob = value; }

  get _data_wydarzenia(): Date { return this.data_wydarzenia; }
  set _data_wydarzenia(value: Date) { this.data_wydarzenia = value; }

  get _plan(): Plan[] { return this.plan; }
  set _plan(value: Plan[]) { this.plan = value; }

  get _cena_biletu(): number { return this.cena_biletu; }
  set _cena_biletu(cena_biletu: number) { this.cena_biletu = cena_biletu; }
}
