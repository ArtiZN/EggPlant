import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFileModalComponent } from './load-filemodal.component';

describe('LoadFilemodalComponent', () => {
  let component: LoadFileModalComponent;
  let fixture: ComponentFixture<LoadFileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadFileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
