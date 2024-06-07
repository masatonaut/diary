import { Component } from '@angular/core';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css',
})
export class DiaryComponent {
  diaries: any[] = [];

  constructor(private diaryService: DiaryService) {}

  ngOnInit(): void {
    this.diaryService.getDiaries().subscribe((data) => {
      this.diaries = data;
    });
  }
}
