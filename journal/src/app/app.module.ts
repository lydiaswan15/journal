import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { JournalEntryListComponent } from './journal-entry/journal-entry-list/journal-entry-list.component';
import { JournalEntryItemComponent } from './journal-entry/journal-entry-item/journal-entry-item.component';
import { JournalEntryDetailsComponent } from './journal-entry/journal-entry-details/journal-entry-details.component';
import { JournalEntryCreateComponent } from './journal-entry/journal-entry-create/journal-entry-create.component';
import { JournalEntryEditComponent } from './journal-entry/journal-entry-edit/journal-entry-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    JournalEntryComponent,
    JournalEntryListComponent,
    JournalEntryItemComponent,
    JournalEntryDetailsComponent,
    JournalEntryCreateComponent,
    JournalEntryEditComponent
  ],
  imports: [
    BrowserModule, 
    // RouterModule.forRoot([
    //   {path: 'details', component: JournalEntryDetailsComponent},
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
