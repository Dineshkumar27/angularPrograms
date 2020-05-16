import {Component} from "@angular/core";
import { log } from 'util';
@Component({
  selector: 'courses',
  template: `
  <input #website (keyup.enter)="onKeyup(website.value)">`
  // website is template variable

})
export class CoursesComponent{
  title = "Welcome";
  isClicked=true;
  onClicked($event) {
    $event.stopPropagation();
    console.log("Button Clicked",$event);
  }
  onDivClicked(){

    console.log("Div Clicked");
  }
  onKeyup(myWebsite){
  console.log(myWebsite);

  }

}
