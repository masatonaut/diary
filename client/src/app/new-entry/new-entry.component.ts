import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService, Diary } from '../diary.service';

@Component({
  selector: 'app-new-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  providers: [DiaryService],
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
})
export class NewEntryComponent {
  title: string = '';
  content: string = '';

  constructor(private diaryService: DiaryService) {}

  addEntry() {
    const newDiary: Diary = {
      id: 0,
      title: this.title,
      content: this.content,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.diaryService.createDiary(newDiary).subscribe(() => {});
  }
}
