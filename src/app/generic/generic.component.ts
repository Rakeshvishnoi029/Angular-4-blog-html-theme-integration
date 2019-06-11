import { Component, OnInit } from '@angular/core';
//import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class GenericComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  //console.log(this.newService.obj.name)
  }

}
