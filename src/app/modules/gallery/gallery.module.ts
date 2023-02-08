import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';


@NgModule({
  declarations: [GallerySectionComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SlickCarouselModule
  ]
})
export class GalleryModule { }
