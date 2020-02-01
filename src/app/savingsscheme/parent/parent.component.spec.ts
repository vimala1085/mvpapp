import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { TitleComponent } from '../title/title.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  const childComponent=jasmine.createSpyObj('ChildComponent',['deposit']);
  //const childComponent=spyOn('ChildComponent',['deposit']);
  const titleComponent=jasmine.createSpyObj('TitleComponent',['getTitle']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent, TitleComponent,ChildComponent],
      imports:[MatFormFieldModule,FormsModule,BrowserAnimationsModule,MatInputModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    const fixtureTitle = TestBed.createComponent(TitleComponent);
    const componentTitle = fixtureTitle.componentInstance;
    componentTitle.customerName = 'GRD Jewellery';
    fixtureTitle.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should retun customername',()=>{
  //spy object createion
   expect(titleComponent).not.toBeNull();
   //
 //expect(component.invokeTitleComponent()).toContain('GRD');
    expect(titleComponent.getTitle()).toBeUndefined();

  })
it('should retun deposit amount',()=>{
  expect(titleComponent).not.toBeNull();
 expect(childComponent.deposit()).toBeUndefined();
})

});
