import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanComponent } from './side-pan.component';

describe('SidePanComponent', () => {
  let component: SidePanComponent;
  let fixture: ComponentFixture<SidePanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
