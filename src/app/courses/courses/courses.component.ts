import { Component } from '@angular/core';
import { Icourse } from '../model/Icourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Icourse[] = [
    {
      _id:'1',
      name:'Course 1',
      category:'Math'
    }
  ];
  constructor(){

  }

  ngOnInit() {

  }
}
