import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledCardComponent } from './titled-card.component';

describe('TitledCardComponent', () => {
  let component: TitledCardComponent;
  let fixture: ComponentFixture<TitledCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitledCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitledCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
