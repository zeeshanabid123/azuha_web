import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaSectionComponent } from './media-section/media-section.component';
import { AudioComponent } from './audio/audio.component';
import { VideosComponent } from './videos/videos.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';

@NgModule({
  declarations: [MediaSectionComponent, AudioComponent, VideosComponent, MediaDetailComponent],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
