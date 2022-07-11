import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { JournalEntryListComponent } from './journal-entry/journal-entry-list/journal-entry-list.component';
import { JournalEntryItemComponent } from './journal-entry/journal-entry-item/journal-entry-item.component';
import { JournalEntryDetailsComponent } from './journal-entry/journal-entry-details/journal-entry-details.component';
import { JournalEntryEditComponent } from './journal-entry/journal-entry-edit/journal-entry-edit.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    JournalEntryComponent,
    JournalEntryListComponent,
    JournalEntryItemComponent,
    JournalEntryDetailsComponent,
    JournalEntryEditComponent, 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
