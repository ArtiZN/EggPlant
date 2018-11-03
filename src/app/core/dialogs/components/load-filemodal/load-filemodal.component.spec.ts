import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFilemodalComponent } from './load-filemodal.component';

describe('LoadFilemodalComponent', () => {
  let component: LoadFilemodalComponent;
  let fixture: ComponentFixture<LoadFilemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadFilemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFilemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
