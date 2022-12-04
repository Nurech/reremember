import { createReducer, on } from '@ngrx/store';
import { initialState, itemAdapter, ItemsState } from './items.state';
import { itemModifiedInDb, itemReadFromDb, itemRemovedFromDb } from './items.actions';

export const itemsReducer = createReducer<ItemsState>(
  initialState,
  on(itemReadFromDb,
    (state, action) => {
      return itemAdapter.upsertOne(action.payload, {...state, isLoading: false});
    }),
  on(itemRemovedFromDb,
    (state, action) => {
      return itemAdapter.removeOne(action.payload.id, state);
    }),
  on(itemModifiedInDb,
    (state, action) => {
      return itemAdapter.updateOne({id: action.payload.id, changes: action.payload}, state);
    })
);
