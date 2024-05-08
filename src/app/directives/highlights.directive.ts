import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]',
  standalone: true
})
export class HighlightsDirective {
  el:ElementRef
  constructor(el:ElementRef) { 
    this.el = el 
  }

  @HostBinding("style.backgroundColor")
  bgclr = "blue"

  @HostListener("mouseenter")
  changeFontSize(){
    console.log("Mouse Enter")
    this.el.nativeElement.style.fontSize = "10px"
  }

  @HostListener("mouseleave")
  resetFontSize(){
    console.log("Mouse Enter")
    this.el.nativeElement.style.fontSize = "30px"
  }

}
