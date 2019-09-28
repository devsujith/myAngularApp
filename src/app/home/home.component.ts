import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  name = "Sujith";
  course = "Full stack development"
  count = 0
  test = ""

  buttonActive = false;

  changeCourseName(){

    this.course = "iOS Development"

  }

  counterFunction(){
    this.count++;
  }
 

  constructor() { 
    setTimeout(()=>{

      this.buttonActive = true
  
    },3000)
  }

  ngOnInit() {
    
  }
  


}
