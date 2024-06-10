import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService, Diary } from '../diary.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [DiaryService, DatePipe],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  diaryCount: number = 0;
  earliestEntryDate: string | null = null;
  latestEntryDate: string | null = null;

  constructor(private diaryService: DiaryService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.diaryService.getDiaries().subscribe((diaries: Diary[]) => {
      this.diaryCount = diaries.length;
      if (diaries.length > 0) {
        this.earliestEntryDate = this.datePipe.transform(
          Math.min(...diaries.map((d) => new Date(d.created_at).getTime())),
          'dd-MM-yyyy'
        );
        this.latestEntryDate = this.datePipe.transform(
          Math.max(...diaries.map((d) => new Date(d.created_at).getTime())),
          'dd-MM-yyyy'
        );
      }
    });
  }
}
