import {Component} from "@angular/core";
@Component({
  selector: 'courses',
  template: `<button  class="btn btn-primary" [class.active]="isClicked"> Save</button>`

})
export class CoursesComponent{
  title = "Welcome";
  isClicked=true;

}
