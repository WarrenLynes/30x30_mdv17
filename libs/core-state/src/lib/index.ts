import { ActionReducerMap } from '@ngrx/store';

import { appReducer, IAppState } from './app/app.reducer';
import { authReducer, IAuthState } from './auth/auth.reducer';
import * as fromTasks from './tasks/reducer';

export interface AppState {
  app: IAppState;
  auth: IAuthState;
  tasks: fromTasks.TasksState;
}

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
  auth: authReducer,
  tasks: fromTasks.reducer
};

export const defaultState: AppState = {
  app: null,
  auth: null,
  tasks: {ids: [] } as fromTasks.TasksState
};
