/* @flow */
import {
  LOAD_ABOUT,
  LOAD_ABOUT_SUCCEEDED,
} from './actions';
import type {
  Syn$Action,
} from '../../../types';

const defaultAboutAction: Syn$Action = {
  type: LOAD_ABOUT,
  payload: '',
};

export function aboutReducer(
  state: ?string = '',
  action: Syn$Action = defaultAboutAction): ?string {
  switch (action.type) {
    case LOAD_ABOUT_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
}

export function aboutLoadedReducer(
  state: boolean = false,
  action: Syn$Action = defaultAboutAction): boolean {
  switch (action.type) {
    case LOAD_ABOUT_SUCCEEDED:
      return true;
    default:
      return state;
  }
}
