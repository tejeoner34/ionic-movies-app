import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { of } from 'rxjs';
import { MovieDetail } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class LocalDataService {

    favoriteMovies: MovieDetail[] = [];
    private _storage: Storage | null = null;
    actualGenres = [];


    constructor(private storage: Storage) {
        this.init();
        this._storage = storage;
        this.loadLocalData();
     }

     async init() {
        const storage = await this.storage.create();
        this._storage = storage;
      }

    saveRemoveMovieFromStorage(movie: MovieDetail) {
        const isAlreadySaved = this.favoriteMovies.find(m => m.id === movie.id);

        if(isAlreadySaved){
            this.favoriteMovies = this.favoriteMovies.filter(m => m.id != movie.id);
        }else{
            this.favoriteMovies = [movie, ...this.favoriteMovies];
        }
        this._storage.set('movies', this.favoriteMovies);
    }

    async loadLocalData(){
        try{
            const savedMovies = await this._storage.get('movies');
            this.favoriteMovies = savedMovies || [];
            this.loadGenre(this.favoriteMovies);

        }catch(err){
            console.log(err)
        }
    }

    loadGenre(movies){
        const genres = [];
        for(let i = 0; i< movies.length; i++){
            for(let j = 0; j< movies[i].genres.length; j++){
                genres.push(this.favoriteMovies[i].genres[j].name);
            }
        }

        this.actualGenres = [...new Set(genres)];
        return this.actualGenres;
    }

    isSaved(movie){
        const isSaved = this.favoriteMovies.find(m => m.id === movie.id);
        return !!isSaved
    }

    get getFavoriteMovies(){
        return [...this.favoriteMovies]
    }

    get getGenres(){
        return [...this.actualGenres]
    }


}
