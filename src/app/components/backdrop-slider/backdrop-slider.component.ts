import {Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swiper, { SwiperOptions, Pagination, FreeMode } from 'swiper';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';



@Component({
    selector: 'app-backdrop-slider',
    templateUrl: './backdrop-slider.component.html',
    styleUrls: ['./backdrop-slider.component.scss'],
})


export class BackdropSliderComponent implements OnInit {

    @Input() movies: Observable<Movie[]>;

    config: SwiperOptions = {
        slidesPerView: 1.2,
        navigation: false,
        freeMode: true

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
