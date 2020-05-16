import {Component} from "@angular/core";
import { log } from 'util';
@Component({
  selector: 'courses',
  template: `
  {{course.title|uppercase}}<br>
  {{course.students|number}}<br>
  {{course.rating|number:'1.2-2'}}<br>
  {{course.price|currency:'INR'}}<br>
{{course.date()|date:'shortDate'}}<br>

  `
//you have to import the FormsComponent in the app.module.ts

})
export class CoursesComponent{
course={
  title:"Python Programming",
  rating:4.989445,
  students:97434334,
  price:195.89,
  date: Date

}

}
