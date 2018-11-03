import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFinishedModalComponent } from './loading-finished-modal.component';

describe('LoadingFinishedModalComponent', () => {
  let component: LoadingFinishedModalComponent;
  let fixture: ComponentFixture<LoadingFinishedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingFinishedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingFinishedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
