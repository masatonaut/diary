import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService, Diary } from '../diary.service';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [DiaryService],
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent {
  diaries: Diary[] = [];

  constructor(private diaryService: DiaryService) {}

  ngOnInit() {
    this.diaryService.getDiaries().subscribe((data: Diary[]) => {
      this.diaries = data;
    });
  }
}
