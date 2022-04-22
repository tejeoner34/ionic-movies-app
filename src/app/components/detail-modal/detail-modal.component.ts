import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent implements OnInit {

    @Input() id: number;


  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
      console.log(this.id)
      this.moviesService.getMovieDetails(this.id).subscribe(res => {
          console.log(res)
      })

      this.moviesService.getMovieCast(this.id).subscribe(res => {
          console.log(res)
      })
  }

}
