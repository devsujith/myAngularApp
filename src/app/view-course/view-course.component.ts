import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courseData : Array<object> = [] //declare empty array
  isLoading = true;
 
  constructor(private api:ApiService) { }

  ngOnInit() {
   this.fetchValues()
    
  }


  public fetchValues(){
   return this.api.viewCoursesAPICall().subscribe((response:Array<object>)=>{

    this.courseData = response;
    this.isLoading = false;
    console.log(response);

   });
  }

}
