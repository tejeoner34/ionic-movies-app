import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CastResponse, Movie, MovieDetail, MoviesAnswer } from '../interfaces';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/newEnv';
import { MovieByNameResponse } from '../interfaces/index';

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

    getMovieDetails(id: number): Observable<MovieDetail>{
        return this.http.get<MovieDetail>(`${url}/movie/${id}?api_key=${api}`)
    }

    getMovieCast(id: number): Observable<CastResponse>{
        return this.http.get<CastResponse>(`${url}/movie/${id}/credits?api_key=${api}`)
    }

    getMoviesByName(name): Observable<MovieByNameResponse>{
        return this.http.get<MovieByNameResponse>(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${name}`)
    }

}
