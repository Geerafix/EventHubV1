import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/Event';

@Pipe({
  name: 'searchevent',
  standalone: true
})
export class SearchEventPipe implements PipeTransform {
  transform(value: Event[], searchValue: string): Event[] {
    if (!value || !searchValue) {
      return value;
    }
    return value.filter((event) => {
      return event._nazwa.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
