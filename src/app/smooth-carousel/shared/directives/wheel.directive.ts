import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appWheel]'
})
export class WheelDirective {

  @HostListener('wheel', ['$event']) onScrollEvent($event: any){
      if($event.deltaY > 0){
        $event.target.scrollBy(300, 0);
      }
      if($event.deltaY < 0){
        $event.target.scrollBy(-300, 0);
      }
  } 

  constructor() {}

}