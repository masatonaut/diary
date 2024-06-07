import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  private apiUrl = 'http://localhost:8000/api/diaries';

  constructor(private http: HttpClient) {}

  getDiaries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDiary(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createDiary(diary: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, diary);
  }

  updateDiary(id: number, diary: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, diary);
  }

  deleteDiary(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
