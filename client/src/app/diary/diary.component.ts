import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent {
  diaries = [
    { id: 1, title: 'Diary 1', content: 'Content 1' },
    { id: 2, title: 'Diary 2', content: 'Content 2' },
    // 他のダイアリーの例
  ];
}
