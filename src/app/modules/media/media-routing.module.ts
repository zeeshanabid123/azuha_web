import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudioComponent } from './audio/audio.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { MediaSectionComponent } from './media-section/media-section.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  { path: '', component: MediaSectionComponent},
  { path: 'audio', component: AudioComponent},

  { path: 'video', component: VideosComponent},

  { path: 'media-detail' + '/:id' + '/:name', component: MediaDetailComponent },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
