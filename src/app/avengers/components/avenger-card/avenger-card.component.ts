import { Component, Input, OnInit } from '@angular/core';
import { Avenger } from '../../interfaces/avenger.interface';

@Component({
  selector: 'app-avenger-card',
  templateUrl: './avenger-card.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})
export class AvengerCardComponent {

  @Input() avenger!: Avenger;

}
