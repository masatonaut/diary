import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diary } from './diary.model';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  private apiUrl = 'http://localhost:8000/api/diaries';

  constructor(private http: HttpClient) {}

  getDiaries(): Observable<Diary[]> {
    return this.http.get<Diary[]>(this.apiUrl);
  }

  getDiary(id: number): Observable<Diary> {
    return this.http.get<Diary>(`${this.apiUrl}/${id}`);
  }

  createDiary(diary: Diary): Observable<Diary> {
    return this.http.post<Diary>(this.apiUrl, diary);
  }

  updateDiary(id: number, diary: Diary): Observable<Diary> {
    return this.http.put<Diary>(`${this.apiUrl}/${id}`, diary);
  }

  deleteDiary(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
