import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DiaryComponent } from './diary/diary.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DiaryComponent,
    NewEntryComponent,
    EditEntryComponent,
    AboutComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'diary', component: DiaryComponent },
      { path: 'new-entry', component: NewEntryComponent },
      { path: 'edit-entry/:id', component: EditEntryComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
