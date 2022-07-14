import { Injectable, EventEmitter } from '@angular/core';
import { MOCKENTRY } from './MOCKENTRY';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { JournalEntryDetailsComponent } from './journal-entry-details/journal-entry-details.component';
import { JournalEntry } from './journal-entries.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JournalEntryService {

  
  entries: JournalEntry[];

  entySelectedEvent = new EventEmitter<JournalEntry>();
  entryChangedEvent = new EventEmitter<JournalEntry[]>();
  entryListChangedEvent = new Subject<JournalEntry[]>();

  // entryListChangedEvent = new Subject<JournalEntry[]>();
  // entries: JournalEntry[] = MOCKENTRY;
  // maxEntryId: number = this.maxEntryId();

  constructor(private httpClient: HttpClient) { }

  getEntries(): JournalEntry[]{

    this.httpClient.get('http://localhost:3000/journal-entries').subscribe({
      next: (entries: any) =>{
        console.log(entries);
        this.entries = entries;
        this.entryListChangedEvent.next(this.entries.slice());
        // this.sortAndSend()
      }, 
      error: (e) => console.log(e.message)
    });
    //this.entryListChangedEvent.next(this.entries.slice());
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
    // newDocument._id = originalDocument._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.httpClient.put('http://localhost:3000/journal-entries/' + oldEntry.id,
    newEntry, { headers: headers })
    .subscribe(
      (response: any) => {
        this.entries[pos] = newEntry;
        // this.sortAndSend();
      }
    );
 }

 addEntry(newEntry: JournalEntry){

      if(!newEntry){

        return;
      }

      // this.entries.push(newEntry);
      // console.log('full list in the service: ', this.entries);
  
      // make sure id of the new Document is empty
      newEntry.id = this.getMaxId();
  
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
      // add to database
      this.httpClient.post<{ message: string, entry: JournalEntry }>('http://localhost:3000/journal-entries',
        newEntry,
        { headers: headers })
        .subscribe(
          (responseData) => {
            // add new document to documents
            this.entries.push(responseData.entry);
            // this.sortAndSend();
          }
        );

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



 deleteEntry(entry: JournalEntry){

  if (!entry) {
    return;
  }

  const pos = this.entries.findIndex(d => d.id === entry.id);

  if (pos < 0) {
    return;
  }

  // delete from database
  this.httpClient.delete('http://localhost:3000/journal-entries/' + entry.id)
    .subscribe(
      (response: any) => {
        this.entries.splice(pos, 1);
        // this.sortAndSend();
      }
    );
 }

//  sortAndSend(){
//   let entryString = JSON.stringify(this.entries);

//   console.log(entryString);

//   this.httpClient.put('http://localhost:3000/journal-entries', entryString)
//   .subscribe(()=>{
//     console.log('We are inside the subscribe. ');
//       this.entryChangedEvent.emit(this.entries.slice());
//   });
//   // Make sure to add the header
// }
}
