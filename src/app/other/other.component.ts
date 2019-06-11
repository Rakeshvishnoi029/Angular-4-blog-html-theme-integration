import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class OtherComponent implements OnInit {

  constructor() { }
 
	  ngOnInit(){
		/* this.form = new FormControl({
			 firstname: new FormControl("" , Validators.required),
			lastname: new FormControl(""),
			email: new FormControl(""),
			language: new FormControl(""), 
			
		}); */
	} 

    items = ['Angular 4', 'React' , 'Underscore'];
    newItem = "Node Js ";
	pushItem = function (){
		if(this.newItem != ""){
			this.items.push(this.newItem);
			this.newItem = "";
		}  
	}
	removeItem = function(index){
		this.items.splice(index,1);
		
	}
	
	onSubmit = function (user){
		console.log(user);
		
	} 
	
}
