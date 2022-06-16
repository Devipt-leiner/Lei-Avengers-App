import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
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

  login () {
    return this.http.get<Auth>(`${ this.URL }/usuarios/1`).pipe(
      // Tap sirve para generar efectos secundarios antes de suscribirse al observable
      tap( auth => this._auth = auth)
    );
  }
}
