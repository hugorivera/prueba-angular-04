import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  errorFlag: boolean;
  mensajeError: string;

  constructor(private spotify:SpotifyService) {

    this.loading = true;
    this.errorFlag = false;

    this.spotify.getNewRelease().subscribe((data:any) =>{
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.errorFlag = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
