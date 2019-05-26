import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseHoverStyle]'
})
export class MouseHoverStyleDirective {

  @Input('appMouseHoverStyle') highlightColor: string;

  constructor(private el: ElementRef) {    
    console.log("qwe123")
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("qwe")
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
