import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { ArrayPairingPipe } from './array-pairing.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    ArrayPairingPipe
  ],
  exports: [
    ImagePipe,
    ArrayPairingPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
