import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }

  addCourseAPICall(data){

    return this.http.post("https://dummyapilist.herokuapp.com/addcourse",data);
  }

  viewCoursesAPICall(){

    return this.http.get("https://dummyapilist.herokuapp.com/getcourses");

  }

}
