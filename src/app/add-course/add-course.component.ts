import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private service:ApiService) { } // to invoke service.

  ngOnInit() {
  }

  readValues(data:NgForm){

   // console.log(data.value.courseTitle);
    this.service.addCourseAPICall(data.value).subscribe((response)=>{ 
      console.log(response);
      alert('Course added!!!')
    });
  }
  

}
