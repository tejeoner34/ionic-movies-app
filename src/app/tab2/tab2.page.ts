import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces';
import { MoviesService } from '../services/movies.service';
import { MovieByNameResult } from '../interfaces/index';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { DetailModalComponent } from '../components/detail-modal/detail-modal.component';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    popularMovies: Observable<Movie[]>;
    searchResult: MovieByNameResult[] = [];
    inputValue: string = "";
    isLoading: boolean = false;

    constructor(private moviesService: MoviesService, private modalController: ModalController) { }

    ngOnInit(): void {
        this.popularMovies = this.moviesService.getDiscoverMovies()
    }

    onSearchChange(event) {
        const searchValue = event.detail.value;

        if (searchValue === "") {
            this.searchResult = [];
            this.inputValue = "";
            return
        }

        this.isLoading = true;

        this.moviesService.getMoviesByName(searchValue).subscribe(res => {
            this.searchResult = res.results;
            this.isLoading = false;
        })
    }

    onClickRecommendation(title) {
        this.inputValue = title;
    }

    onOpenDetails(id){
        this.presentDetails(id)
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
