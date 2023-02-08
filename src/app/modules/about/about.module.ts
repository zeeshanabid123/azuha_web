import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutRoutingModule } from './about-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroRoutingModule } from '../heroes/heroes-routing.module';
import { GallerySectionComponent } from '../gallery/gallery-section/gallery-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselAboutDirective } from './shared/carouselabout.directive';
import { IvyCarouselModule } from 'angular-responsive-carousel';





@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AboutUsComponent,CarouselAboutDirective],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    IvyCarouselModule
    
  ],
  entryComponents: [
    AboutUsComponent
  ],
  
})
export class AboutModule { }
