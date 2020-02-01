import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondComponent } from './diamond.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { PhotoService } from '../services/photoservice';

describe('DiamondComponent', () => {
  let component: DiamondComponent;
  let fixture: ComponentFixture<DiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondComponent ],
      imports:[MatCardModule,MatButtonModule],
      providers:[PhotoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
