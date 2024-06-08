import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-edit-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  providers: [DiaryService],
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
})
export class EditEntryComponent implements OnInit {
  title: string = '';
  content: string = '';

  constructor(
    private route: ActivatedRoute,
    private diaryService: DiaryService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.diaryService.getDiary(+id).subscribe((diary) => {
        this.title = diary.title;
        this.content = diary.content;
      });
    }
  }

  saveEntry(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const updatedDiary = { title: this.title, content: this.content };
      this.diaryService.updateDiary(+id, updatedDiary).subscribe(() => {});
    }
  }
}
