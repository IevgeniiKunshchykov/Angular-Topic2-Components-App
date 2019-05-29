import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle') apptitle: ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.apptitle.nativeElement.innerText = 'Shop';
  }
}
