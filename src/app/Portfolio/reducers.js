/* @flow */
import {
  LOAD_PORTFOLIO,
  LOAD_PORTFOLIO_SUCCEEDED,
  LOAD_PORTFOLIO_DETAIL_SUCCEEDED,
  LOAD_PORTFOLIO_DETAIL,
  RESET_SELECTED_PORTFOLIO_DETAIL,
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

function addPortfolioToList(portfolio: ?Syn$Portfolio[] = [], portfolioItem?: Syn$Portfolio): Syn$Portfolio[] {
  
  if (!portfolio) {
    portfolio = [];
  }
  
  if (!portfolioItem) {
    return portfolio;
  }

  const { id } = portfolioItem;
  const result = portfolio.find((item) => item.id === id);

  if (result) {
    return portfolio;
  }

  return [
    ...portfolio,
    portfolioItem,
  ];
}

export function portfolioReducer(
  state: ?Syn$Portfolio[] = [],
  action: Syn$Action = defaultPortfolioAction): ?Syn$Portfolio[] {
    switch (action.type) {
      case LOAD_PORTFOLIO_SUCCEEDED:
        return action.payload;
      case LOAD_PORTFOLIO_DETAIL_SUCCEEDED:
        return addPortfolioToList(state, action.payload);
      default:
        return state;
    }
}

export function selectedPortfolioIdReducer(
  state: ?string = null,
  action: Syn$Action = defaultSelectedPortfolioAction): ?string {
    switch (action.type) {
      case LOAD_PORTFOLIO_DETAIL:
        return action.payload;
      case RESET_SELECTED_PORTFOLIO_DETAIL:
        return null;
      default:
        return state;
    }
}

export function portfolioLoadedReducer(
  state: boolean = false,
  action: Syn$Action = defaultPortfolioAction): boolean {
    switch (action.type) {
      case LOAD_PORTFOLIO_SUCCEEDED:
        return true;
      default:
        return state;
    }
}
