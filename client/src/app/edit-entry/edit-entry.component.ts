import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
})
export class EditEntryComponent implements OnInit {
  id!: number;
  title: string = '';
  content: string = '';

  constructor(
    private route: ActivatedRoute,
    private diaryService: DiaryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.diaryService.getDiary(this.id).subscribe((diary) => {
      this.title = diary.title;
      this.content = diary.content;
    });
  }

  updateDiary(): void {
    const updatedDiary = {
      title: this.title,
      content: this.content,
    };
    this.diaryService.updateDiary(this.id, updatedDiary).subscribe(() => {
      this.router.navigate(['/diary']);
    });
  }
}
