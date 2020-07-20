import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private router:ActivatedRoute,
    private spotify:SpotifyService) { 
    this.router.params.subscribe( params => {
      this.loading = true;
      console.log(params);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id:string){
    this.spotify.getArtista(id).subscribe(artista =>{
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id:string){
      this.spotify.getTopTracks(id).subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }

  ngOnInit(): void {
  }

}
