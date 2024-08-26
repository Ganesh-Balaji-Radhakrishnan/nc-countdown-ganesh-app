import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventNameDisplayComponent } from './event-name-display.component';

describe('EventNameDisplayComponent', () => {
  let component: EventNameDisplayComponent;
  let fixture: ComponentFixture<EventNameDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventNameDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventNameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
