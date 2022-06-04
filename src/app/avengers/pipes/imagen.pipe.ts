import { Pipe, PipeTransform } from '@angular/core';
import { Avenger } from '../interfaces/avenger.interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(avenger: Avenger): string {

    if (!avenger.id && !avenger.alt_img) {
      return 'assets/no-image.png';
    } else if (avenger.alt_img) {
      return avenger.alt_img;
    } else {
      return `/assets/avengers/${ avenger.id }.jpg`;
    }
  }

}
