import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GeneratorService } from './core/services/generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle') apptitle: ElementRef;

  constructor(private g: GeneratorService) {
    console.log(g.generateSequesnce());
  }

  ngAfterViewInit(): void {
    this.apptitle.nativeElement.innerText = 'Shop';
  }
}
