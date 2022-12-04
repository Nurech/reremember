import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { metaReducers, reducers } from './IRootState';
import { ItemsStoreModule } from '../items-store/items-store.module';


@NgModule({
  declarations: [],
  imports: [
    ItemsStoreModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {
}
