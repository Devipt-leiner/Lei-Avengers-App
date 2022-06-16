import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = environment.URL;
  private _auth: Auth | undefined;

  get auth () {
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }

  verificateAuthentication(): Observable<boolean> {

    if ( localStorage.getItem('token') ) {
      return of(false);
    }

    return this.http.get<Auth>(`${ this.URL }/usuarios/1`).pipe(
      map( auth => {
        this._auth = auth;
        return true;
      })
    )
  }

  login () {
    return this.http.get<Auth>(`${ this.URL }/usuarios/1`).pipe(
      // Tap sirve para generar efectos secundarios antes de suscribirse al observable
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('id', auth.id))
    );
  }
}
