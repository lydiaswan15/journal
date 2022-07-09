import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-journal-entry-details',
  templateUrl: './journal-entry-details.component.html',
  styleUrls: ['./journal-entry-details.component.css']
})
export class JournalEntryDetailsComponent implements OnInit {

  id: number;

  constructor(private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.id = +params['id'];
    });
  }

}
