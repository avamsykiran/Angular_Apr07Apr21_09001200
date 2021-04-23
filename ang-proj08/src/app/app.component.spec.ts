import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have welcomeText="Hello! Welcome!"',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.welcomeText).toBe("Hello! Welcome!");
  });

  it('should have h2 element with content as "Hello! Welcome!"',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Hello! Welcome!");
  });

  it('should have button element when clicked should change h1 content as "Hmm! So you clicked it"',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    fixture.detectChanges();

    let btn : HTMLButtonElement = fixture.nativeElement.querySelector("button");

    btn.click();

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1').textContent).toBe("Hmm! So you clicked it");
  });
});