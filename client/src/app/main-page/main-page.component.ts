import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService, Diary } from '../diary.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [DiaryService],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  diaryCount: number = 0;
  earliestEntryDate: Date | null = null;
  latestEntryDate: Date | null = null;

  constructor(private diaryService: DiaryService) {}

  ngOnInit() {
    this.diaryService.getDiaries().subscribe((diaries: Diary[]) => {
      this.diaryCount = diaries.length;
      if (diaries.length > 0) {
        this.earliestEntryDate = new Date(
          Math.min(...diaries.map((d) => new Date(d.created_at).getTime()))
        );
        this.latestEntryDate = new Date(
          Math.max(...diaries.map((d) => new Date(d.created_at).getTime()))
        );
      }
    });
  }
}
