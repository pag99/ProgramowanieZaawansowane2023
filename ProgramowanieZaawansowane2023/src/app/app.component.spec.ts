import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('powinno zwrócić ProgramowanieZaawansowane2023', () => {
    const usluga = new AppComponent();
    const title = usluga.title;

    expect(title).toBe('ProgramowanieZaawansowane2023')
  })

});
