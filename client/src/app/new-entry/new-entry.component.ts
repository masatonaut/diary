import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService } from '../diary.service';

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
    const newDiary = { title: this.title, content: this.content };
    this.diaryService.createDiary(newDiary).subscribe(() => {});
  }
}
