import { Pipe, PipeTransform } from '@angular/core';
import { Avenger } from '../interfaces/avenger.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(avenger: Avenger): string {
    return `/assets/avengers/${ avenger.id }.jpg`;
  }

}
