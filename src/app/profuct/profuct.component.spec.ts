import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfuctComponent } from './profuct.component';

describe('ProfuctComponent', () => {
  let component: ProfuctComponent;
  let fixture: ComponentFixture<ProfuctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfuctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
