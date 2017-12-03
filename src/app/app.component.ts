import { Component } from '@angular/core';

@Component({
  selector: 'inline-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  value = 'example';

  onChange(event, ctrl) {
    console.log(event);
    console.log(ctrl);
    console.log(this.value);
  }
}
