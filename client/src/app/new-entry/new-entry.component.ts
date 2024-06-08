import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
})
export class NewEntryComponent {
  title: string = '';
  content: string = '';

  addEntry() {
    const newDiary = { title: this.title, content: this.content };
    // DiaryService へのロジック
  }
}
