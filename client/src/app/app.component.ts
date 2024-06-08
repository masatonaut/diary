import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DiaryComponent } from './diary/diary.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarComponent,
    MainPageComponent,
    DiaryComponent,
    NewEntryComponent,
    EditEntryComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
}
