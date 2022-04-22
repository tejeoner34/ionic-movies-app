import {Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces';
import Swiper, { SwiperOptions, Pagination, FreeMode } from 'swiper';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
Swiper.use([Pagination, FreeMode])

@Component({
  selector: 'app-poster-slider',
  templateUrl: './poster-slider.component.html',
  styleUrls: ['./poster-slider.component.scss'],
})
export class PosterSliderComponent implements OnInit {

    @Input() movies: Observable<Movie[]>;

    config: SwiperOptions = {
        slidesPerView: 3.3,
        freeMode: true,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true

    };

    constructor(public modalController: ModalController) { }

    ngOnInit() {
        Swiper.use([Pagination, FreeMode])
    }

    async presentDetails(id: number) {
        const modal = await this.modalController.create({
            component: DetailModalComponent,
            componentProps: {
                id
            }
        });
        await modal.present();

    }

}
