import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Item } from '../models/item.model';

export const itemsFeatureKey = 'items';

export const itemAdapter = createEntityAdapter<Item>();

export interface ItemsState extends EntityState<Item> {
  error: string;
  isLoading: boolean;
}

export const defaultState: ItemsState = {
  ids: [],
  entities: {},
  error: '',
  isLoading: false,
};

export const initialState: ItemsState = itemAdapter.getInitialState(defaultState);


