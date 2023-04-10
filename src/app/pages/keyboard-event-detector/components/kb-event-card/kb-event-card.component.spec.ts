import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbEventCardComponent } from './kb-event-card.component';

describe('KbEventCardComponent', () => {
  let component: KbEventCardComponent;
  let fixture: ComponentFixture<KbEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbEventCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KbEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
