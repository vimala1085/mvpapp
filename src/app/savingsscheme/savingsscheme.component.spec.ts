import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsschemeComponent } from './savingsscheme.component';
import { ParentComponent } from './parent/parent.component';
import { TitleComponent } from './title/title.component';
import { ChildComponent } from './child/child.component';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { FormsModule } from '@angular/forms';

xdescribe('SavingsschemeComponent', () => {
  let component: SavingsschemeComponent;
  let fixture: ComponentFixture<SavingsschemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsschemeComponent,ParentComponent,TitleComponent,ChildComponent ],
      imports:[MatFormFieldControl,MatFormFieldModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsschemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeUndefined();
  });
});
