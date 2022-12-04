import { createFeatureSelector, createSelector } from '@ngrx/store';
import { itemsFeatureKey } from './items.state';
import { Item } from '../models/item.model';
export const selectAppState = createFeatureSelector<Item>(
  itemsFeatureKey
);

export const selectCurrentState = createSelector(
  selectAppState,
  state => state
);
