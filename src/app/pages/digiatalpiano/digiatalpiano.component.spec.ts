import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiatalpianoComponent } from './digiatalpiano.component';

describe('DigiatalpianoComponent', () => {
  let component: DigiatalpianoComponent;
  let fixture: ComponentFixture<DigiatalpianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiatalpianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiatalpianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
