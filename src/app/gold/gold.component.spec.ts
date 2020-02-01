import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldComponent } from './gold.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';

describe('GoldComponent', () => {
  let component: GoldComponent;
  let fixture: ComponentFixture<GoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatTableModule,MatPaginatorModule],
      declarations: [ GoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
