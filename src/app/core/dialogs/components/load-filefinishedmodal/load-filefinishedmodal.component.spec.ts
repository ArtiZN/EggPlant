import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFilefinishedmodalComponent } from './load-filefinishedmodal.component';

describe('LoadFilefinishedmodalComponent', () => {
  let component: LoadFilefinishedmodalComponent;
  let fixture: ComponentFixture<LoadFilefinishedmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadFilefinishedmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFilefinishedmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
