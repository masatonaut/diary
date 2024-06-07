import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  diaryCount: number = 0;
  earliestEntryDate: string = '';
  latestEntryDate: string = '';

  constructor(private diaryService: DiaryService) {}

  ngOnInit(): void {
    this.diaryService.getDiaries().subscribe((diaries) => {
      this.diaryCount = diaries.length;
      if (diaries.length > 0) {
        const sortedDiaries = diaries.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
        this.earliestEntryDate = sortedDiaries[0].created_at;
        this.latestEntryDate =
          sortedDiaries[sortedDiaries.length - 1].created_at;
      }
    });
  }
}
