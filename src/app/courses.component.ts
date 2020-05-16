import {Component} from "@angular/core";
@Component({
  selector: 'courses',
  template: `
  <div (click)="onDivClicked()">
    <button  (click)="onClicked($event)"> Save</button>
    </div>`

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

}
