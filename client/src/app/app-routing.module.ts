import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DiaryComponent } from './diary/diary.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'new-entry', component: NewEntryComponent },
  { path: 'edit-entry/:id', component: EditEntryComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
