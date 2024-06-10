import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService, Diary } from '../diary.service';

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
  id!: number;

  constructor(
    private diaryService: DiaryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.diaryService.getDiary(this.id).subscribe((diary: Diary) => {
      this.title = diary.title;
      this.content = diary.content;
    });
  }

  saveEntry() {
    const updatedDiary: Diary = {
      id: this.id,
      title: this.title,
      content: this.content,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.diaryService.updateDiary(this.id, updatedDiary).subscribe(() => {
      this.router.navigate(['/diary']);
    });
  }
}
