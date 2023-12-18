import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/Event';

@Pipe({
  name: 'dateFilter',
  standalone: true
})

export class DateFilterPipe implements PipeTransform {
  transform(events: Event[]): Event[] {
    return events.filter((event) => {
      return new Date(event._data_wydarzenia) >= new Date();
    });
  }
}
