import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Avenger } from '../interfaces/avenger.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  private URL: string = environment.URL;

  constructor (private http: HttpClient) { }

  getAvengers (): Observable<Avenger[]> {
    return this.http.get<Avenger[]>(`${this.URL}/heroes`);
  }

  getAvengerById (id: string): Observable<Avenger> {
    return this.http.get<Avenger>(`${this.URL}/heroes/${id}`);
  }

  getSuggestions (term: string): Observable<Avenger[]> {
    return this.http.get<Avenger[]>(`${this.URL}/heroes?q=${term}&_limit=6`);
  }

  addAvenger (avenger: Avenger): Observable<Avenger> {
    return this.http.post<Avenger>(`${this.URL}/heroes`, avenger);
  }

  updateAvenger (avenger: Avenger): Observable<Avenger> {
    return this.http.put<Avenger>(`${this.URL}/heroes/${avenger.id}`, avenger);
  }

  deleteAvenger (id: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}/heroes/${id}`);
  }
}
