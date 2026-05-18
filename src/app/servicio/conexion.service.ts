import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConexionService {
  protected UrlRecibida = 'http://localhost:3000/api';

  constructor(protected http: HttpClient) {}
}
