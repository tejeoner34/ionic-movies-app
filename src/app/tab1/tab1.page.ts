import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';



@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    public movies: Observable<Movie[]>;
    public popularMovies: any = [];
    
    constructor(private moviesService: MoviesService) { }

    ngOnInit(): void {
        this.movies = this.moviesService.getDiscoverMovies();
        this.moviesService.getPopularMovies().subscribe(res => {

            const paires = res.reduce( (result, value, index, array) => {

                if ( index % 2 === 0) {
                  result.push(array.slice(index, index + 2));
                }
                return result;
              }, []);
            
             this.popularMovies = [...this.popularMovies, ...paires];
        
        })

    }


    loadMorePopularMovies(){
       this.moviesService.loadMorePopularMovies().subscribe(res => {
        const paires = res.reduce( (result, value, index, array) => {

            if ( index % 2 === 0) {
              result.push(array.slice(index, index + 2));
            }
            return result;
          }, []);

          console.log(this.popularMovies)
        
         this.popularMovies = [...this.popularMovies, ...paires];
        })
    }
    
    
    

}
