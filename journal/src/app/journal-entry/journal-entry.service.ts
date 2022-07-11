import { Injectable } from '@angular/core';
import { JournalEntry } from './journal-entries-model';
import { MOCKENTRY } from './MOCKENTRY';

@Injectable({
  providedIn: 'root'
})
export class JournalEntryService {
  entries: JournalEntry[] = MOCKENTRY;
  // maxEntryId: number = this.maxEntryId();

  constructor() { }

  getEntries(){
    return this.entries;
  }

  getEntry(id: number): JournalEntry{
    for(let entry of this.entries){
         if(entry.id == id){
             return entry;
         }
    }
    return null;
 }
 updateEntry(oldEntry: JournalEntry, newEntry: JournalEntry){

 }

 addEntry(newEntry: JournalEntry){

      if(!newEntry){
        return;
      }

      this.entries.push(newEntry);
      console.log('full list in the service: ', this.entries);

      // You will have more information here to update the server. 

 }

 getMaxId(): number{

  // Get max Id is working properly. 
  let maxId = 0;

  this.entries.forEach(entry => {
     let currentId = entry.id;
     if(currentId > maxId){
         maxId = currentId;
     }
  });  

 return maxId + 1;
 }

 storeDocuments(){
  // will update this to write to the server. 
 }
}
