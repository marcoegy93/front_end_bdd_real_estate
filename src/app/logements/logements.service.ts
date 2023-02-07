import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogementsService {
  readonly ApiUrl = "https://localhost:7073/api/Personne/"
  constructor(private http: HttpClient) { }


  
}
