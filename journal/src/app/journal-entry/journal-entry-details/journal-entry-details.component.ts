import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { JournalEntry } from '../journal-entries.model';
import { JournalEntryService } from '../journal-entry.service';

@Component({
  selector: 'app-journal-entry-details',
  templateUrl: './journal-entry-details.component.html',
  styleUrls: ['./journal-entry-details.component.css']
})
export class JournalEntryDetailsComponent implements OnInit {

  @Input() entry: JournalEntry;
  id: number;

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private entryService: JournalEntryService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.id = +params['id'];
      this.entry = this.entryService.getEntry(this.id);
    });
  }

}
