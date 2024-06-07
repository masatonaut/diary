import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  diaries: any[] = [];

  constructor(private diaryService: DiaryService) {}

  ngOnInit(): void {
    this.diaryService.getDiaries().subscribe((data) => {
      this.diaries = data;
    });
  }
}
