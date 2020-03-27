import {AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FirstComponent} from './products/components/first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  @ViewChild('appTitle', {static: false})
  headerName: ElementRef;
  firstComponent: FirstComponent;  // ?
  title = 'shop';

  ngAfterViewChecked(): void {
    this.headerName.nativeElement.textContent = 'Food market';
  }

}
