import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/Event';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: Event[], searchValue: string, searchBy: string): Event[] {
    if (!value || !searchValue) {
      return value;
    }
    return value.filter((event) => {
      let searchByField;
      if (searchBy === 'nazwa') {
        searchByField = event._nazwa;
      } else if (searchBy === 'rodzaj') {
        searchByField = event._rodzaj;
      } else if (searchBy === 'miejsce') {
        searchByField = event._miejsce;
      }
      return searchByField && searchByField.toString().toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
