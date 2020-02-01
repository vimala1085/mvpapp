import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextComponent } from './context.component';
import { CountryService } from '../services/country.service';
import { ChartModule } from 'primeng/chart';

describe('ContextComponent', () => {
  let component: ContextComponent;
  let fixture: ComponentFixture<ContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextComponent ],providers:[CountryService],imports:[ChartModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
