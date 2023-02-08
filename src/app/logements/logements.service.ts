import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criteria } from './Criteria';
import { Logement } from './Logement';

@Injectable({
  providedIn: 'root'
})
export class LogementsService {
  readonly ApiUrl = "https://localhost:7073/api/Logement/"
  constructor(private http: HttpClient) { }

  async getAllLogement() : Promise<Logement[]>{
    let listLogement = []
    await this.http.get<Logement[]>(this.ApiUrl+'getAllLogement/').toPromise().then((data) =>{
      listLogement = data
    })
 
     return listLogement
   }

   async getLogementByWord(word: string): Promise<Logement[]>{
    let listLogement = []
    await this.http.get<Logement[]>(`${this.ApiUrl}getLogementByWord/${word}`).toPromise().then((data) =>{
     listLogement = data
    })
 
     return listLogement
  }

  async getLogementByCriteria(listcriteria: Criteria) {
    let listLogement = []
    console.log(listcriteria)
    await this.http.post<Logement[]>(`${this.ApiUrl}getLogementByCriteria`,listcriteria).toPromise().then((data) =>{
      listLogement = data
     })
 
    return listLogement
  }
  
}
