import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import Swiper, { SwiperOptions, Pagination, FreeMode } from 'swiper';
import 'animate.css';
import { ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';


@Component({
    selector: 'app-poster-double-slider',
    templateUrl: './poster-double-slider.component.html',
    styleUrls: ['./poster-double-slider.component.scss'],
    encapsulation: ViewEncapsulation.None
    
})
export class PosterDoubleSliderComponent implements OnInit {

    @Input() movies: any[] = [];
    @Output() addMoreMoviesEmitter = new EventEmitter();

    config: SwiperOptions = {
        slidesPerView: 3.3,
        freeMode: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 20

    };

    constructor(public modalController: ModalController) { }

    ngOnInit() {
        Swiper.use([Pagination, FreeMode]);
    }

    onAddMoreMovies(){
        this.addMoreMoviesEmitter.emit();
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
