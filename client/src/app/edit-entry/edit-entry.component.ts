import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
})
export class EditEntryComponent {
  title: string = '';
  content: string = '';

  saveEntry() {
    const updatedDiary = { title: this.title, content: this.content };
    // DiaryService へのロジック
  }
}
