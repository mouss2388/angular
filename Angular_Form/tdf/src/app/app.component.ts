import { User } from './models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  userModel = new User('', 'rob@test.com', 1234567891, 'default', 'morning', true);

  validateTopic(value){
    if (value === 'default'){
      this.topicHasError = true;
    }else {
      this.topicHasError = false;
    }
  }

}
