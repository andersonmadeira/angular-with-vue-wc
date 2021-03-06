import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-with-vue-wc';

  showAlert(event) {
    console.log('event fired:', event.detail);
  }
}
