import { Injectable } from '@angular/core';
import { Actions} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DataService } from '../../services/data.service';
import { ToastService } from '../../services/toast.service';
import { LocalforageService } from '../../services/localforage.service';
import { IRootState } from '../root-store/IRootState';

@Injectable()
export class ItemsEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<IRootState>,
    private dataService: DataService,
    private toastService: ToastService,
    private localforageService: LocalforageService,
  ) {}

}
