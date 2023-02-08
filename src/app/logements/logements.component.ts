import { Component, OnInit } from '@angular/core';
import { Criteria } from './Criteria';
import { Logement } from './Logement';
import { LogementsService } from './logements.service';

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.scss']
})
export class LogementsComponent implements OnInit {
  listLogement: Logement[] = []
  listcriteria: Criteria
  searchWord=''
  type=''
  nbPiece=null
  surface=null
  etat=''
  objetGestion=''
  prixMinimum=null
  prixMaximum=null
  ville=''
  dateDispo=''
  constructor(private readonly _logementService: LogementsService) { }

  async ngOnInit() {
    await this._logementService.getAllLogement().then((data) => this.listLogement = data)
  }

  async search(){
    await this._logementService.getLogementByWord(this.searchWord).then((data) => this.listLogement = data)
  }

  async searchAdvanced(values){
    console.log(values)
    this.listcriteria = values 
    await this._logementService.getLogementByCriteria(this.listcriteria).then((data) => this.listLogement = data)
  }

  async reloadLogement(){
    await this._logementService.getAllLogement().then((data) => this.listLogement = data)
    this.searchWord=''
    this.type=''
    this.nbPiece=null
    this.surface=null
    this.etat=''
    this.objetGestion=''
    this.prixMinimum=null
    this.prixMaximum=null
    this.ville=''
    this.dateDispo=''
  }

  getWidth(){
    if(this.listLogement.length == 20)
      return { width:'20%'}
     else
      return { width:'10%'}
  }

}
