import { Component, OnInit } from '@angular/core';
import { Avenger } from '../../interfaces/avenger.interface';
import { AvengersService } from '../../services/avengers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  avengers: Avenger[] = [];

  constructor (private avengersService: AvengersService) { }

  ngOnInit(): void {
    this.avengersService.getAvengers().subscribe(response => {
      this.avengers = response;
    });
  }

}
