// event.service.ts
import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class EventDataService {
  data$: Observable<any>;
  private dataSubject = new BehaviorSubject<any>("");

  constructor() {
      this.data$ = this.dataSubject.asObservable();
  }

  send(eventList: Event[]) {
      this.dataSubject.next(eventList);
  }
}
