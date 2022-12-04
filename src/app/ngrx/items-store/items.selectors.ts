import { createFeatureSelector, createSelector } from '@ngrx/store';
import { itemsFeatureKey, ItemsState } from './items.state';
export const selectAppState = createFeatureSelector<ItemsState>(
  itemsFeatureKey
);

export const selectAllItems = createSelector(
  selectAppState,
  state => state.entities
);
