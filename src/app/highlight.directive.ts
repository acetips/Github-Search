import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eRef: ElementRef) {
    this.eRef.nativeElement.style.color= 'yellow'
   }

}
