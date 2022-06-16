import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lei-button',
  templateUrl: './lei-button.component.html',
  styleUrls: ['./lei-button.component.css']
})
export class LeiButtonComponent {
  @Input() textButton!: string;
}
