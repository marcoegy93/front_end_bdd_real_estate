import { Component, OnInit } from '@angular/core';
import { Personne } from './Personne';
import { PersonnesService } from './personnes.service';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.scss']
})
export class PersonnesComponent implements OnInit {
  listPersonne: Personne[] = []
  searchName=''
  constructor(private readonly _personneService: PersonnesService) { }

  async ngOnInit() {
    await this._personneService.getAllPersonne().then((data) => this.listPersonne = data)
  }

  async searchByName(){
    await this._personneService.getPersonneByName(this.searchName).then((data) => this.listPersonne = data)
  }

  async reloadPersonne(){
    await this._personneService.getAllPersonne().then((data) => this.listPersonne = data)
    this.searchName=''
  }

  getWidth(){
    if(this.listPersonne.length == 20)
      return { width:'20%'}
     else
      return { width:'10%'}

    
  }
}
