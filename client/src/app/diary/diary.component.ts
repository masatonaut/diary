import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService, Diary } from '../diary.service';
import { NewlineToBrPipe } from '../newline-to-br.pipe';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, NewlineToBrPipe],
  providers: [DiaryService],
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent {
  diaries: Diary[] = [];

  constructor(private diaryService: DiaryService) {}

  ngOnInit() {
    this.diaryService.getDiaries().subscribe((data) => {
      this.diaries = data;
    });
  }
}
