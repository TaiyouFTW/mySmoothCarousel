import { Component, OnInit, Input } from '@angular/core';
import { WheelService } from '../shared/services/wheel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: string[];

  constructor(private wheelService: WheelService) {}

  ngOnInit() {
  }

  prevItem() {
    this.wheelService.previousItem();
  }

  nextItem() {
    this.wheelService.nextItem();
  }

}