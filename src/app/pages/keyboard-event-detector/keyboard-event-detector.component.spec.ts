import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardEventDetectorComponent } from './keyboard-event-detector.component';

describe('KeyboardEventDetectorComponent', () => {
  let component: KeyboardEventDetectorComponent;
  let fixture: ComponentFixture<KeyboardEventDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardEventDetectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardEventDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
