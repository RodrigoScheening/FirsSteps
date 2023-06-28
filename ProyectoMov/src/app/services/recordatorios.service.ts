import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Irecordatorio } from '../interfaces/Irecordatorio';

@Injectable({
  providedIn: 'root'
})
export class RecordatoriosService {
  private apiUrl = 'http://localhost:3000/recordatorios';

  constructor(private http: HttpClient) { }

  getRecordatorios(): Observable<Irecordatorio[]> {
    return this.http.get<Irecordatorio[]>(this.apiUrl);
  }

  createRecordatorio(recordatorio: Irecordatorio): Observable<Irecordatorio> {
    return this.http.post<Irecordatorio>(this.apiUrl, recordatorio);
  }

  deleteRecordatorio(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateRecordatorio(recordatorio: Irecordatorio): Observable<Irecordatorio> {
    const url = `${this.apiUrl}/${recordatorio.id}`;
    return this.http.put<Irecordatorio>(url,recordatorio);
  }
}

