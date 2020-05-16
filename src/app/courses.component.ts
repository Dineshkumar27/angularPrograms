import {Component} from "@angular/core";
import { log } from 'util';
@Component({
  selector: 'courses',
  template: `
  <input [value]="email" (keyup.enter)="email=$event.target.value;onKeyup(email)">`
//two way binding

})
export class CoursesComponent{
  email="mailfordins@gmail.com"
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
