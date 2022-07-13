import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JournalEntry } from '../journal-entries.model';
import { JournalEntryService } from '../journal-entry.service';
import { MOCKENTRY } from '../MOCKENTRY';

@Component({
  selector: 'app-journal-entry-list',
  templateUrl: './journal-entry-list.component.html',
  styleUrls: ['./journal-entry-list.component.css']
})
export class JournalEntryListComponent implements OnInit {

  journal_entries: JournalEntry[]; 
  subscription: Subscription;

  constructor(private entryService: JournalEntryService) { 
    this.journal_entries = entryService.getEntries();
  }

  ngOnInit(): void {
    // Create a on changed event in the recipes service and subscribe to it here to get the full list of recipes when they change. 
    this.subscription = this.entryService.entryListChangedEvent.subscribe((entryList: JournalEntry[])=>{
      this.journal_entries = entryList;
  });
  
  this.entryService.entryChangedEvent.subscribe((entries: JournalEntry[])=>{
    this.journal_entries = entries;
  })
  }

}
