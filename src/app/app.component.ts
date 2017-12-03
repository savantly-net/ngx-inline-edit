import { Component } from '@angular/core';

@Component({
  selector: 'inline-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onChange(value) {
    console.log('changed: ' + value);
  }
}
