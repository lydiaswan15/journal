import { Component, Input, OnInit } from '@angular/core';
import { JournalEntry } from '../journal-entries-model';

@Component({
  selector: 'app-journal-entry-item',
  templateUrl: './journal-entry-item.component.html',
  styleUrls: ['./journal-entry-item.component.css']
})
export class JournalEntryItemComponent implements OnInit {

  @Input() entry: JournalEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
