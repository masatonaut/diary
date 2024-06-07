import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
})
export class NewEntryComponent {
  title: string = '';
  content: string = '';

  constructor(private diaryService: DiaryService, private router: Router) {}

  createDiary(): void {
    const newDiary = {
      title: this.title,
      content: this.content,
      created_at: new Date().toISOString(),
    };
    this.diaryService.createDiary(newDiary).subscribe(() => {
      this.router.navigate(['/diary']);
    });
  }
}
