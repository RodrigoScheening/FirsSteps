import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacunas } from '../interfaces/vacunas';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {
  private apiUrl = 'http://localhost:3300/vacunas';

  constructor(private http: HttpClient) { }

  getVacunas(infante: string, edad: string): Observable<Vacunas[]> {
    const url = `${this.apiUrl}?infante=${infante}&edad=${edad}`;
    return this.http.get<Vacunas[]>(url);
  }
}
