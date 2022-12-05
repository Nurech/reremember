import { createFeatureSelector, createSelector } from '@ngrx/store';
import { itemAdapter, itemsFeatureKey, ItemsState } from './items.state';


export const selectAppState = createFeatureSelector<ItemsState>(
  itemsFeatureKey
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = itemAdapter.getSelectors(selectAppState);

export const selectAllItems = createSelector(
  selectAppState,
  state => state.entities
);
