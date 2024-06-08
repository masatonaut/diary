import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { MainPageComponent } from './app/main-page/main-page.component';
import { DiaryComponent } from './app/diary/diary.component';
import { NewEntryComponent } from './app/new-entry/new-entry.component';
import { EditEntryComponent } from './app/edit-entry/edit-entry.component';
import { AboutComponent } from './app/about/about.component';
import { NavbarComponent } from './app/navbar/navbar.component';

const routes = [
  { path: '', component: MainPageComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'new-entry', component: NewEntryComponent },
  { path: 'edit-entry/:id', component: EditEntryComponent },
  { path: 'about', component: AboutComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, FormsModule),
  ],
}).catch((err) => console.error(err));
