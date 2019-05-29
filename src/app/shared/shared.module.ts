import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseHoverStyleDirective } from './directives/mouse-hover-style.directive';


// Так не будет дублирования в разных массивах одних и тех же элементов
const directives = [MouseHoverStyleDirective];
@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule
  ],
  exports: [...directives]
})
export class SharedModule { }
