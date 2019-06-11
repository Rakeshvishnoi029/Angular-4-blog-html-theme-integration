import { Component } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { MyDataService } from './my-data.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	constructor(private newService: MyDataService){}
	
   ngOnInit(){
	console.log(this.newService.success())   
	console.log(this.newService.obj)
   }
   
  title = 'app ';
  
  obj = {
	  id: "1",
	  name: "Rakesh"	
  }
  
  arrMembere =  ["Rakesh", "Rajive","Rahul", "Lokesh"];
  istrue = true; 
  myname = 'KRakesh Vishnoi'; 
  
  
 
}
