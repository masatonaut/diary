import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-new-entry',
  standalone: true,
  imports: [],
  templateUrl: './new-entry.component.html',
  styleUrl: './new-entry.component.css',
})
export class NewEntryComponent {
  title: string = '';
  content: string = '';

  constructor(private diaryService: DiaryService, private router: Router) {}

  createDiary(): void {
    this.diaryService
      .createDiary({ title: this.title, content: this.content })
      .subscribe(() => {
        this.router.navigate(['/diary']);
      });
  }
}
