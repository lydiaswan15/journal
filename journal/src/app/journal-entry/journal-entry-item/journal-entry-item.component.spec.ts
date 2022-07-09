import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntryItemComponent } from './journal-entry-item.component';

describe('JournalEntryItemComponent', () => {
  let component: JournalEntryItemComponent;
  let fixture: ComponentFixture<JournalEntryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalEntryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEntryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
