import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MoviesAnswer } from '../interfaces';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/newEnv';

const url = environment.url;
const api = environment.api;

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    pageNumber = 1;

    constructor(private http: HttpClient) { }

    getDiscoverMovies(): Observable<Movie[]> {
        return this.http.get<MoviesAnswer>(`${url}/discover/movie?primary_release_date.gte=2022-01-01&primary_release_date.lte=2022-04-01&api_key=${api}`)
            .pipe(
                map(({ results }) => results)
            )
    }

    getPopularMovies() {

        return this.http.get<MoviesAnswer>(`${url}/discover/movie?sort_by=popularity.desc&api_key=${api}`)
            .pipe(
                map(({ results }) => results)
            )
    }

    loadMorePopularMovies(){
        this.pageNumber ++
        return this.http.get<MoviesAnswer>(`${url}/discover/movie?sort_by=popularity.desc&api_key=${api}&page=${this.pageNumber}`)
            .pipe(
                map(({ results }) => results)
            )

    }

    getMovieDetails(id: number){
        return this.http.get(`${url}/movie/${id}?api_key=${api}`)
    }

    getMovieCast(id: number){
        return this.http.get(`${url}/movie/${id}/credits?api_key=${api}`)
    }

}
