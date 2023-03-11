import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalpianoComponent } from './digitalpiano.component';

describe('DigitalpianoComponent', () => {
  let component: DigitalpianoComponent;
  let fixture: ComponentFixture<DigitalpianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalpianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalpianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
