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
    if(!oldEntry || !newEntry){
      return;
    }

    const pos = this.entries.findIndex(d => d.id === oldEntry.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Document to the id of the old Document
    newEntry.id = oldEntry.id;
    // newEntry._id = oldEntry._id;

    this.entries[pos] = newEntry;

    // const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    // this.http.put('http://localhost:3000/documents/' + originalDocument.id,
    //   newDocument, { headers: headers })
    //   .subscribe(
    //     (response: Response) => {
    //       this.documents[pos] = newDocument;
    //       this.sortAndSend();
    //     }
    //   );

    // this.recipesChanged.next(this.entries.slice());
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

 deleteEntry(entry: JournalEntry){

    const pos = this.entries.findIndex(d => d.id === entry.id);
    this.entries.splice(pos, 1);

    console.log(this.entries);
 }
}
