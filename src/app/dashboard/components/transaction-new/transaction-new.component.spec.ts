import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNewComponent } from './transaction-new.component';

describe('TransactionNewComponent', () => {
  let component: TransactionNewComponent;
  let fixture: ComponentFixture<TransactionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
