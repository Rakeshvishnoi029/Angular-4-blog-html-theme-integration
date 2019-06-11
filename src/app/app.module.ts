import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProfuctComponent } from './profuct/profuct.component';
import { MembersComponent } from './members/members.component';
import { GenericComponent } from './generic/generic.component';
import { ElementsComponent } from './elements/elements.component';
import { HomesComponent } from './homes/homes.component';
import { OtherComponent } from './other/other.component';
import { NodeComponent } from './node/node.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProfuctComponent,
    MembersComponent,
    GenericComponent,
    ElementsComponent,
    HomesComponent,
    OtherComponent,
    NodeComponent,
	
  ],
  imports: [
    BrowserModule,
	FormsModule,
	RouterModule.forRoot([
		{
			path : 'member',
			component : MembersComponent
		},
		{
			path : 'product',
			component : ProfuctComponent
			
		},
		{
			path : 'generic',
			component : GenericComponent
			
		},
		{
			path : 'elements',
			component : ElementsComponent
			
		},
		{
			path : 'homes',
			component : HomesComponent
			
		},
		{
			path : 'others',
			component : OtherComponent
			
		},
		{
			path : 'node',
			component : NodeComponent
			
		},{
			path : '',
			component : HomesComponent
			
		},
		
	]),
	ReactiveFormsModule,	
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
