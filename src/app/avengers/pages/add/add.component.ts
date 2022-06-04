import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs";
import Swal from 'sweetalert2';

import { Avenger, Publisher } from '../../interfaces/avenger.interface';
import { AvengersService } from '../../services/avengers.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 250px;
      border-radius: 10px;
    }
  `]
})
export class AddComponent implements OnInit {

  avenger: Avenger = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: ''
  }

  constructor(
    private avengersService: AvengersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.router.url.includes('add')) {
      return;
    }

    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.avengersService.getAvengerById(id))
    ).subscribe(
      response => this.avenger = response
    );
  }

  save () {
    if (this.avenger.superhero.trim().length === 0) {
      return;
    }

    if (this.avenger.id) {
      // Update
      this.avengersService.updateAvenger(this.avenger).subscribe(
        response => console.log('Updating', response)
      );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      // Create
      this.avengersService.addAvenger(this.avenger).subscribe((avenger) => {
        this.router.navigate(['/avengers/edit', avenger.id]);
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  delete () {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.avengersService.deleteAvenger(this.avenger.id!).subscribe(response => {
          this.router.navigate(['/avengers'])
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

}
