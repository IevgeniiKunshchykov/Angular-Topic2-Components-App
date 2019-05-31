import { Directive, Input, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

  @Input('appChangeStyle') fontSize: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
  }
}
