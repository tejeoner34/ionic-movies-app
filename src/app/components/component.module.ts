import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdropSliderComponent } from './backdrop-slider/backdrop-slider.component';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';
import { PosterSliderComponent } from './poster-slider/poster-slider.component';
import { PosterDoubleSliderComponent } from './poster-double-slider/poster-double-slider.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';




@NgModule({
  declarations: [
      BackdropSliderComponent,
      PosterSliderComponent,
      PosterDoubleSliderComponent,
      DetailModalComponent
  ],
  exports: [
      BackdropSliderComponent,
      PosterSliderComponent,
      PosterDoubleSliderComponent,
      DetailModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
    PipesModule
  ]
})
export class ComponentModule { }
