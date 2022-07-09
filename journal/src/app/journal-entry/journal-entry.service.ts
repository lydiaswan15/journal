import { Injectable } from '@angular/core';
import { JournalEntry } from './journal-entries-model';

@Injectable({
  providedIn: 'root'
})
export class JournalEntryService {
  entries: JournalEntry[] = [];
  maxEntryId: number;

  constructor() { }

//   getContact(id: number): Contact{
//     for(let contact of this.en){
//          if(contact.id == id){
//              return contact;
//          }
//     }
//     return null;
//  }
}
