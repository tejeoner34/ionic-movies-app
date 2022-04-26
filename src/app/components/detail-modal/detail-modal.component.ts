import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, MovieDetail } from 'src/app/interfaces';
import { LocalDataService } from 'src/app/services/local-data.service';
import { MoviesService } from 'src/app/services/movies.service';

import Swiper, { SwiperOptions, Pagination, FreeMode } from 'swiper';


@Component({
    selector: 'app-detail-modal',
    templateUrl: './detail-modal.component.html',
    styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

    @Input() id: number;
    movieDetail: MovieDetail;
    movieCast: Cast[] = [];
    isInFavs: boolean = false;
    charactersAmount = 120;
    threeDots = '...';

    config: SwiperOptions = {
        slidesPerView: 3.3,
        freeMode: true,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true

    };


    constructor(
        public moviesService: MoviesService, 
        public modalController: ModalController,
        public localDataService: LocalDataService) { }

    ngOnInit() {
        Swiper.use([Pagination, FreeMode])


        this.moviesService.getMovieDetails(this.id).subscribe(res => {
            this.movieDetail = res;
            console.log(res)
            this.isInFavs = this.localDataService.isSaved(this.movieDetail);
        });

        this.moviesService.getMovieCast(this.id).subscribe(res => {
            this.movieCast = res.cast;
        });


    }

    goBack(){
        this.modalController.dismiss();
    }

    addToFavs(movie){
        this.localDataService.saveRemoveMovieFromStorage(movie);
        this.isInFavs = !this.isInFavs;
    }

}
