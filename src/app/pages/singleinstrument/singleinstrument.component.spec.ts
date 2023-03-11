import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleinstrumentComponent } from './singleinstrument.component';

describe('SingleinstrumentComponent', () => {
  let component: SingleinstrumentComponent;
  let fixture: ComponentFixture<SingleinstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleinstrumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleinstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
