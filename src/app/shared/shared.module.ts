import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseHoverStyleDirective } from './directives/mouse-hover-style.directive';

@NgModule({
  declarations: [MouseHoverStyleDirective],
  imports: [
    CommonModule
  ],
  exports: [MouseHoverStyleDirective]
})
export class SharedModule { }
