import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { Plan } from '../models/Plan';
import { Participant } from '../models/Participant';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class EventDataService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = 'http://localhost:3000/events';

  getData(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.apiUrl).pipe(
      map((events) => events.map((event: any) => {
        return new Event(
          event.id,
          event.nazwa,
          event.rodzaj,
          event.organizator,
          event.miejsce,
          event.max_ilosc_osob,
          new Date(event.data_wydarzenia),
          event.cena_biletu,
          event.plan.map((plan: any) => {
            return new Plan(
              plan.nazwa,
              plan.godz_rozpoczecia,
              plan.godz_zakonczenia
          )}),
          event.uczestnicy.map((participant: any) => {
            return new Participant(
              participant.imie,
              participant.nazwisko,
              participant.wiek,
              participant.email,
              participant.nr_telefonu
          )}));
    })));
  }

  getSingleData(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.apiUrl}/${id}`).pipe(
      map((event: any) => {
        return new Event(
          event.id,
          event.nazwa,
          event.rodzaj,
          event.organizator,
          event.miejsce,
          event.max_ilosc_osob,
          new Date(event.data_wydarzenia),
          event.cena_biletu,
          event.plan.map((plan: any) => {
            return new Plan(
              plan.nazwa,
              plan.godz_rozpoczecia,
              plan.godz_zakonczenia
          )}),
          event.uczestnicy.map((participant: any) => {
            return new Participant(
              participant.imie,
              participant.nazwisko,
              participant.wiek,
              participant.email,
              participant.nr_telefonu
          )}));
    }));
  }

  postData(event: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.apiUrl, event);
  }

  updateData(id: number, event: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.apiUrl}/${id}`, event);
  }

  deleteData(id: number): Observable<Event> {
    return this.httpClient.delete<Event>(`${this.apiUrl}/${id}`);
  }
}
