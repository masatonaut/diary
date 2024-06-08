import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [DiaryService],
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
