import { Component, OnInit, inject} from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { Event } from '../models/Event';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchPipe } from "../pipes/search.pipe";
import { AddEventComponent } from '../add-event/add-event.component';
import { EventDataService } from '../services/event-data.service';
import { SearchByDatePipe } from '../pipes/search-by-date.pipe';
import { ScaleDirective } from '../directives/scale.directive';
import { HighlightDirective } from '../directives/highlight.directive';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from '../models/Participant';
import { Plan } from '../models/Plan';

@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrl: './event.component.css',
    imports: [CommonModule,
              FormsModule,
              SearchPipe,
              SearchByDatePipe,
              RouterLink,
              RouterOutlet,
              RouterLinkActive,
              AddEventComponent,
              ScaleDirective,
              HighlightDirective,
              HttpClientModule]
})
export class EventComponent implements OnInit {
  public eventList: Event[] = [];
  public search: string = '';
  public searchBy: string = 'nazwa';
  public startDate: string = '';
  public endDate: string = '';
  public event!: Event;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private eventDataService: EventDataService) {
    this.fetchData();
    console.log();
  }

  ngOnInit(): void {
    this.eventList.sort((a, b) => b._data_wydarzenia.getTime() - a._data_wydarzenia.getTime());
  }

  isAddEvent(): boolean { return this.router.url.startsWith('/dodaj-wydarzenie'); }
  isEventDetails(): boolean { return this.router.url.startsWith('/szczegoly'); }
  isBuyTicket(): boolean { return this.router.url.startsWith('/kup-bilet'); }

  addEvent() { this.router.navigate(['/dodaj-wydarzenie']); }
  showEventDetails(event: Event): void { this.router.navigate(['/szczegoly', event._id]); }
  buyTicket(event: Event): void { this.router.navigate(['/kup-bilet', event._id]); }

  clearPipe() {
    this.search = '';
    this.searchBy = 'nazwa'
    this.startDate = '';
    this.endDate = '';
  }




  private apiUrl = 'http://localhost:3000/events';

  fetchData() {
    this.httpClient.get(this.apiUrl).subscribe((res: any) => {
      this.eventList = res.map((item: any) => {
        let {
          id,
          nazwa,
          rodzaj,
          organizator,
          miejsce,
          max_ilosc_osob,
          data_wydarzenia,
          cena_biletu,
          plan,
          uczestnicy
        } = item;

        return new Event(
          id,
          nazwa,
          rodzaj,
          organizator,
          miejsce,
          max_ilosc_osob,
          new Date(data_wydarzenia),
          cena_biletu,
          plan.map((planItem: Plan) => ({
            nazwa: planItem._nazwa,
            godz_rozpoczecia: planItem._godz_rozpoczecia,
            godz_zakonczenia: planItem._godz_zakonczenia
          })),
          uczestnicy.map((participantItem: Participant) => ({
            imie: participantItem._imie,
            nazwisko: participantItem._nazwisko,
            email: participantItem._email,
            wiek: participantItem._wiek,
            nr_telefonu: participantItem._nr_telefonu
          }))
        );
      });
    });
  }

  addData(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/addData`, data);
  }

  updateData(id: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/updateData/${id}`, data);
  }

  deleteData(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/deleteData/${id}`);
  }
}
