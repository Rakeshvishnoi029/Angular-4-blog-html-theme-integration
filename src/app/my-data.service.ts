import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }
	
	obj = {
		id:"1",
		name:"rakesh",
		rollNo:"1245"
		
	}
	success(){
		
		return 'Successfull';
	}
}
