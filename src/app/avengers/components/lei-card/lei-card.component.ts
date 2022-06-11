import { Component, Input, OnInit } from '@angular/core';
import { Avenger } from '../../interfaces/avenger.interface';

@Component({
  selector: 'app-lei-card',
  templateUrl: './lei-card.component.html',
  styleUrls: ['./lei-card.component.css']
})
export class LeiCardComponent {

  @Input() avenger!: Avenger;

}
