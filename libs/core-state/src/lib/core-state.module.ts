import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';

import { CoreDataModule } from '@mdv17/core-data';
import { reducers } from '.';
import { AuthEffects } from './auth/auth.effects';

import { Effects as TaskEffects } from './tasks/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      AuthEffects,
      TaskEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'mdv17 Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
