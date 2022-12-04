import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { itemsFeatureKey } from './items.state';
import { itemsReducer } from './items.reducer';
import { ItemsEffects } from './items.effects';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(itemsFeatureKey, itemsReducer),
    EffectsModule.forFeature([ItemsEffects])
  ],
  providers: []
})
export class ItemsStoreModule {}
