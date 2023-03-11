import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalinstrumentComponent } from './musicalinstrument.component';

describe('MusicalinstrumentComponent', () => {
  let component: MusicalinstrumentComponent;
  let fixture: ComponentFixture<MusicalinstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalinstrumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicalinstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
