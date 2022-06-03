import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Avenger } from '../../interfaces/avenger.interface';
import { AvengersService } from '../../services/avengers.service';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styles: [`
    .border-radius {
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    img {
      width: 100%;
    }
  `]
})
export class AvengerComponent implements OnInit {

  avenger!: Avenger;

  constructor (
    private activatedRoute: ActivatedRoute,
    private avengersService: AvengersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.avengersService.getAvengerById(id) )
    )
    .subscribe(avenger => this.avenger = avenger)
  }

  back () {
    this.router.navigate(['/avengers/list']);
  }

}
