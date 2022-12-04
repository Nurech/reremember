import { IRootState } from './IRootState';
import { ActionReducer } from '@ngrx/store';
import { storageSync } from '@larscom/ngrx-store-storagesync';

export function storageSyncReducer(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
  // provide all feature states within the features array
  // features which are not provided, do not get synced
  const metaReducer = storageSync<IRootState>({
    features: [
      { stateKey: 'items' }, // everyone else
      { stateKey: 'item' } // current user
    ],
    // defaults to localStorage
    storage: window.localStorage
  });

  return metaReducer(reducer);
}
