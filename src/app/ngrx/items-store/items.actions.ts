import { createAction, props } from '@ngrx/store';
import { Item } from '../models/item.model';

export const requestedAllItems = createAction(
  '[Item] requested all items'
);

export const itemReadFromDb = createAction(
  '[Item] item read from db',
  props<{payload: Item}>()
);

export const itemRemovedFromDb = createAction(
  '[Item] item removed from db',
  props<{payload: Item}>()
);


export const itemModifiedInDb = createAction(
  '[Item] item modified from db',
  props<{payload: Item}>()
);

export const getItemsFromDb = createAction(
  '[Item] get item from db',
  props<{payload: string}>()
);


export const getItemsFromDbSuccess = createAction(
  '[Item] get items from db success',
  props<{payload: Item}>()
);

export const getItemsFromDbFailure = createAction(
  '[Item] get items from db failure',
  props<{error: Error}>()
);
