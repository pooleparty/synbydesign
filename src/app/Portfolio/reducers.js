/* @flow */
import {
  LOAD_PORTFOLIO,
  LOAD_PORTFOLIO_SUCCEEDED,
  LOAD_PORTFOLIO_DETAIL_SUCCEEDED,
  LOAD_PORTFOLIO_DETAIL,
} from './actions';
import type {
  Syn$Portfolio,
  Syn$Action,
} from '../../../types';

const defaultPortfolioAction = {
  type: LOAD_PORTFOLIO,
  payload: [],
};

const defaultSelectedPortfolioAction = {
  type: '',
  payload: null,
};

export function portfolioReducer(
  state: Syn$Portfolio[] = [],
  action: Syn$Action = defaultPortfolioAction) {
  switch (action.type) {
    case LOAD_PORTFOLIO_SUCCEEDED:
      return action.payload;
    case LOAD_PORTFOLIO_DETAIL_SUCCEEDED:
      // FIXME: this will need to be refined in the event portfolio list is already hydrated
      // we don't want to just tack on duplicates at the end of the list
      return [...state, action.payload];
    default:
      return state;
  }
}

export function selectedPortfolioIdReducer(
  state: ?string = null,
  action: Syn$Action = defaultSelectedPortfolioAction) {
  switch (action.type) {
    case LOAD_PORTFOLIO_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
