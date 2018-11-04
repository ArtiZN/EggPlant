import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationStartedModalComponent } from './validationstarted-modal.component';

describe('LoadFilefinishedmodalComponent', () => {
  let component: ValidationStartedModalComponent;
  let fixture: ComponentFixture<ValidationStartedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationStartedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationStartedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
