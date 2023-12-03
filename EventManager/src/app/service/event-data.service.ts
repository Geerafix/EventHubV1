import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { Observable, BehaviorSubject, map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class EventDataService {
  data$: Observable<any>;
  private dataSubject = new BehaviorSubject<any>("");

  constructor() {
      this.data$ = this.dataSubject.asObservable();
  }

  send(eventList: Event[]): void {
    this.dataSubject.next(eventList);
  }
}
