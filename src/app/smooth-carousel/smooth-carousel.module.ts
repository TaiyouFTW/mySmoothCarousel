import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { WheelDirective } from './shared/directives/wheel.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarouselComponent, WheelDirective],
  exports: [CarouselComponent]
})
export class SmoothCarouselModule { }