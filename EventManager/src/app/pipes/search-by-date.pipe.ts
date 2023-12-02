import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/Event';

@Pipe({
  name: 'searchByDate',
  standalone: true
})
export class SearchByDatePipe implements PipeTransform {
  transform(value: Event[], startDate: string, endDate: string): Event[] {
    if (!startDate || !endDate) {
      return value;
    }

    return value.filter(event => {
      const eventStart = event.startDateToString();
      const eventEnd = event.endDateToString();
      return eventStart >= startDate && eventEnd <= endDate;
    });
  }
}
