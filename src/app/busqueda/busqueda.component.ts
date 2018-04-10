import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  userName : string;
  repos: Array<string> = [];
  
  constructor(private servicio: GithubService) { }
  
  ngOnInit() {
  }

  buscar(){
    this.servicio.getRepos(this.userName).subscribe(repos => {
      this.repos = repos.map(item => item.name);
    });
  }
}
