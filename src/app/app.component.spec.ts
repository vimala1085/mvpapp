import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DiamondComponent } from './diamond/diamond.component';
import { ProductComponent } from './product/product.component';
import { SilverComponent } from './silver/silver.component';
import { GoldComponent } from './gold/gold.component';
import { ParentComponent } from './savingsscheme/parent/parent.component';
import { ChildComponent } from './savingsscheme/child/child.component';
import { SavingsschemeComponent } from './savingsscheme/savingsscheme.component';
import { TitleComponent } from './savingsscheme/title/title.component';
import { MessageComponent } from './savingsscheme/message/message.component';
import { EqualValidator } from './register/matchvalidator';
import { UserPipe } from './user.pipe';
import { HomeComponent } from './home/home.component';
import { ContextComponent } from './context/context.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { ChartModule } from 'primeng/chart/';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        RegisterComponent,
        DiamondComponent,
        ProductComponent,
        SilverComponent,
        GoldComponent,
        ParentComponent,
        ChildComponent,
        SavingsschemeComponent,
        TitleComponent,
        MessageComponent,
        EqualValidator,
        UserPipe,
        HomeComponent,
        ContextComponent,
        TestimonialsComponent
      ],
      imports: [
        BrowserModule,
        RouterTestingModule,
        AppRoutingModule,
        MenubarModule,
         BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
       MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatOptionModule,
        ChartModule
    
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mvpapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Minimum Viable Product');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('mvpapp app is running!');
  });
});
