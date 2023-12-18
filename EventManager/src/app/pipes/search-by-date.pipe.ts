import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/Event';

@Pipe({
  name: 'searchByDate',
  standalone: true,
})

export class SearchByDatePipe implements PipeTransform {
  transform(value: Event[], startDate?: string, endDate?: string): Event[] {
    if (!startDate || !endDate) { return value; }

    let start = new Date(startDate);
    let end = new Date(endDate);

    return value.filter(event => {
      let eventDate = new Date(event._data_wydarzenia);
      return eventDate >= start && eventDate <= end;
    });
  }
}
