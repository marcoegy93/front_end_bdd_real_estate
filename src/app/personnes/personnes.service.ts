import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from 'app/personnes/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  readonly ApiUrl = "https://backendbdd.fly.dev/api/Personne/"
  constructor(private http: HttpClient) { }


  async getAllPersonne() : Promise<Personne[]>{
   let listPersonne = []
   await this.http.get<Personne[]>(this.ApiUrl+'getAllPersonne/').toPromise().then((data) =>{
    listPersonne = data
   })

    return listPersonne
  }

  async getPersonneByName(name: string): Promise<Personne[]>{
    let listPersonne = []
    await this.http.get<Personne[]>(`${this.ApiUrl}getPersonneByName/${name}`).toPromise().then((data) =>{
     listPersonne = data
    })
 
     return listPersonne
  }
}
