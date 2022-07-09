import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntryCreateComponent } from './journal-entry-create.component';

describe('JournalEntryCreateComponent', () => {
  let component: JournalEntryCreateComponent;
  let fixture: ComponentFixture<JournalEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
