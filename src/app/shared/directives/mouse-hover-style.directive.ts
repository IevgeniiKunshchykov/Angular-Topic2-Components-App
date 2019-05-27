import { Directive, ElementRef, HostListener, Input, Component } from '@angular/core';

@Directive({
  selector: '[appMouseHoverStyle]'
})
export class MouseHoverStyleDirective {

  @Input('appMouseHoverStyle') highlightColor: string;

  constructor(private el: ElementRef) {   
  }

  @HostListener('mouseenter') onMouseEnter() {    
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    console.log(color)
    this.el.nativeElement.style.backgroundColor = color;
  }
}
