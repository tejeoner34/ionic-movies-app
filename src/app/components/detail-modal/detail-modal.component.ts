import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

    @Input() id: number;
    movieDetail: MovieDetail;


  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
      this.moviesService.getMovieDetails(this.id).subscribe(res => {
          console.log(this.id);
          this.movieDetail = res;
          
      })

      this.moviesService.getMovieCast(this.id).subscribe(res => {
          
      })
  }

}
