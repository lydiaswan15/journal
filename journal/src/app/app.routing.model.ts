import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JournalEntry } from "./journal-entry/journal-entries.model";
import { JournalEntryDetailsComponent } from "./journal-entry/journal-entry-details/journal-entry-details.component";
import { JournalEntryEditComponent } from "./journal-entry/journal-entry-edit/journal-entry-edit.component";
import { JournalEntryComponent } from "./journal-entry/journal-entry.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/journal-entries', pathMatch: 'full'},
    {path: 'journal-entries', component: JournalEntryComponent, children: 
        [
            {path: 'new', component: JournalEntryEditComponent}, 
            {path: ':id', component: JournalEntryDetailsComponent}, 
            {path: ':id/edit', component: JournalEntryEditComponent}, 
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}