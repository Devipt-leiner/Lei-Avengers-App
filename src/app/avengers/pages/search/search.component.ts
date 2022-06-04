import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Avenger } from '../../interfaces/avenger.interface';
import { AvengersService } from '../../services/avengers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  avengers: Avenger[] = [];
  result!: Avenger | undefined;
  isResults!: boolean;

  constructor(private avengersService: AvengersService) { }

  ngOnInit(): void {
  }

  searching () {
    this.avengersService.getSuggestions(this.term.trim()).subscribe((response) => {
      this.avengers = response;
    });
  }

  optionSelected (event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      this.result = undefined;
      return;
    }

    // TODO: Validar si es un string vacío

    const avenger: Avenger = event.option.value;
    this.term = avenger.superhero;
    console.log(avenger);
    this.result = avenger;
  }

}
