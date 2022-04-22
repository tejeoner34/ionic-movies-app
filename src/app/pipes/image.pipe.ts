import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/newEnv';

const url = environment.imageUrl;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {

    if(!img) return './assets/no-image-banner.jpg'

    const imgUrl = `${url}/${size}${img}`
    return imgUrl;
  }

}
