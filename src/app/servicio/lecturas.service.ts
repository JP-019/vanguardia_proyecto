import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root',
})
export class LecturasService extends ConexionService {
  obtenerTodos<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.UrlRecibida}/ejemplo`);
  }

  obtenerUno<T>(id: string): Observable<T> {
    return this.http.get<T>(`${this.UrlRecibida}/ejemplo/${id}`);
  }
}
