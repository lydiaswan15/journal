import { Component, OnInit } from '@angular/core';
import { JournalEntry } from '../journal-entries-model';
import { JournalEntryService } from '../journal-entry.service';
import { MOCKENTRY } from '../MOCKENTRY';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css']
})
export class JournalEntryListComponent implements OnInit {

  journal_entries: JournalEntry[] = [];

  constructor(private entryService: JournalEntryService) { }

  ngOnInit(): void {
    // Create a on changed event in the recipes service and subscribe to it here to get the full list of recipes when they change. 
    this.journal_entries = this.entryService.getEntries();
    this.entryService.getEntriesTest();
  }

}
