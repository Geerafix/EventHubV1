import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { Plan } from '../models/Plan';

@Injectable({
  providedIn: 'root',
})

export class EventDataService {
  eventPlan: Plan[] = [
    new Plan("lol", "12:03", "12:03"),
    new Plan("lll", "12:03", "12:03"),
    new Plan("lss", "12:03", "12:03")
  ]

  eventList: Event[] = [
    new Event(1, "Przedstawienie teatralne", "Rodzaj1", "Organizator1", "Białystok", 100, 200, new Date('2023-02-15'), this.eventPlan, 50),
    new Event(2, "Koncert muzyczny", "Rodzaj2", "Organizator2", "Warszawa", 120, 250, new Date('2023-03-10'), this.eventPlan,  80),
    new Event(3, "Wystawa sztuki", "Rodzaj3", "Organizator3", "Poznań", 80, 180, new Date('2023-04-05'), this.eventPlan, 30),
    // new Event(4, "Konferencja naukowa", "Rodzaj4", "Organizator4", "Kraków", 200, 350, new Date('2023-05-20T09:00:00'), new Date('2023-05-20'), 150),
    // new Event(5, "Pokaz filmowy", "Rodzaj5", "Organizator5", "Władysławowo", 90, 150, new Date('2023-06-15'), new Date('2023-06-15'), 60),
    // new Event(6, "Warsztaty kulinarne", "Rodzaj6", "Organizator6", "Pruszków", 60, 100, new Date('2023-07-08'), new Date('2023-07-08'), 25),
    // new Event(7, "Sesja fotograficzna", "Rodzaj7", "Organizator7", "Świnoujście", 110, 220, new Date('2023-08-03'), new Date('2023-08-03'), 45),
    // new Event(8, "Występ stand-upowy", "Rodzaj8", "Organizator8", "Rewal", 70, 120, new Date('2023-09-18'), new Date('2023-09-18'), 40),
    // new Event(9, "Pokaz mody", "Rodzaj9", "Organizator9", "Zakopane", 85, 160, new Date('2023-10-12'), new Date('2023-10-12'), 55),
    // new Event(10, "Festiwal kulinarny", "Rodzaj10", "Organizator10", "Wasilków", 150, 300, new Date('2023-11-25'), new Date('2023-11-25'), 100)
  ];

  getEvents(): Event[] {
    return this.eventList;
  }

  putEvent(event: Event): void {
    this.eventList.push(event);
  }

  getEvent(id: number): Event | undefined {
    return this.eventList.find((event) => event._id == id);
  }

  deleteEvent(id: number) {
    // this.eventList.splice(id, 1);
  }
}
