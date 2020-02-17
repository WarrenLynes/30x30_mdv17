import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@mdv17/material';
import AppRoutingModule from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { UiModule } from '@mdv17/ui';
import { CoreStateModule } from '@mdv17/core-state';
import { CoreDataModule } from '@mdv17/core-data';
import { RouterModule } from '@angular/router';
import { FormComponent } from './tasks/form/form.component';
import { ListComponent } from './tasks/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TasksComponent, FormComponent, ListComponent],
  imports: [
    CoreStateModule,
    CoreDataModule,
    UiModule,
    BrowserModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
