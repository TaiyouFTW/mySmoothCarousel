import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WheelService {

  constructor() { 

    
  }

  previousItem() {
    let items = document.querySelector("#sc-items") as HTMLElement;
    let left = Math.round(items.scrollLeft);
    let maxSize = items.scrollWidth - items.offsetWidth;
    if(left <= items.offsetWidth) {
      items.scrollLeft = maxSize;
    } else {
      items.scrollLeft -= items.offsetWidth;
    }
  }

  nextItem() {
    let items = document.querySelector("#sc-items") as HTMLElement;
    let left = Math.round(items.scrollLeft);
    let maxSize = items.scrollWidth - items.offsetWidth;
    if(left >= maxSize) {
      items.scrollLeft = 0;
    } else {
      items.scrollLeft += items.offsetWidth;
    }
    
  }
}
