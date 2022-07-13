import { Component, OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JournalEntry } from '../journal-entries.model';
import { JournalEntryService } from '../journal-entry.service';

@Component({
  selector: 'app-journal-entry-edit',
  templateUrl: './journal-entry-edit.component.html',
  styleUrls: ['./journal-entry-edit.component.css']
})
export class JournalEntryEditComponent implements OnInit {
  originalEntry: JournalEntry;
  entry: JournalEntry;
  editMode: boolean = false;
  // Edit mode? 

  constructor(public route: ActivatedRoute,
              public router: Router, 
              private entryService: JournalEntryService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      let id = +params['id'];

      console.log(id);
  
      if(id == null){
        this.editMode = false;
        return;
      }

      this.originalEntry = this.entryService.getEntry(id);
      if(this.originalEntry == undefined || null){
        return;
      }
      this.editMode = true;
      this.entry = JSON.parse(JSON.stringify(this.originalEntry));

      // This was for the group contacts. 
      // if(this.originalContact.group != null){
      //   this.groupContacts = this.originalContact.group.splice();
      //   console.log(this.groupContacts);
      
      // }
      console.log("OnInit: ");
      console.log(this.entry);
    })
  }

  onSubmit(form: any){

    let id: number;

    if(!this.originalEntry){
      // There is no id and we need to set one. 
      id = this.entryService.getMaxId();
    }
    else{
      // We are editing a current document and will use the old id. 
      id = this.originalEntry.id;
    }
    let value = form.value;
    let newEntry = new JournalEntry(id, value.title, value.entry, value.greatThing1, value.greatThing2, value.greatThing3, new Date());
    console.log('New entry in submit: ', newEntry);
    console.log('edit mode before pushing: ', this.editMode);
    if(this.editMode == true){
      this.entryService.updateEntry(this.originalEntry, newEntry);
    }
    else{
      console.log('Calling the add Entry not the update.')
      this.entryService.addEntry(newEntry)
    }
    this.router.navigate(['/journal-entries']);

  }
  onCancel(){}

  onDelete(){
    this.entryService.deleteEntry(this.entry);
  }

}
