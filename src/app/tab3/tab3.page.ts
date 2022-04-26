import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {


    get favMovies(){
        return this.localDataService.getFavoriteMovies
    }

    get genres(){
        return this.localDataService.getGenres
    }

  constructor(private localDataService: LocalDataService) {}


  filterMovies(genre):Observable<any>{
      return of(this.favMovies.filter(movie=> movie.genres.find(g => g.name === genre)))
  }
}
