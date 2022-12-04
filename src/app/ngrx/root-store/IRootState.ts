import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { debug } from './root.meta-reducers';
import { storeFreeze } from 'ngrx-store-freeze';
import { ItemsState } from '../items-store/items.state';
import { itemsReducer } from '../items-store/items.reducer';

export interface IRootState {
  items: ItemsState;
}

export const reducers: ActionReducerMap<IRootState> = {
  items: itemsReducer
};

export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [storeFreeze, debug] : [];

