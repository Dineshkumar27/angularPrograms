import {Component} from "@angular/core";
import { log } from 'util';
@Component({
  selector: 'courses',
  template: `
  <input [(ngModel)]="email" (keyup.enter)="onKeyup()">`
//you have to import the FormsComponent in the app.module.ts

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
  onKeyup(){
  console.log(this.email);

  }

}
