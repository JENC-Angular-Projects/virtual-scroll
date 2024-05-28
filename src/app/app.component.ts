import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'virtual-scroll';
  items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
}
