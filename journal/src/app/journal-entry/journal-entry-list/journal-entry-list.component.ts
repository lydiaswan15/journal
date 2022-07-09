import { Component, OnInit } from '@angular/core';
import { JournalEntry } from '../journal-entries-model';
import { MOCKENTRY } from '../MOCKENTRY';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css']
})
export class JournalEntryListComponent implements OnInit {

  journal_entries: JournalEntry[] = MOCKENTRY;

  constructor() { }

  ngOnInit(): void {
  }

}
