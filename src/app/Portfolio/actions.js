/* @flow */
import type {
  Syn$Action,
} from '../../../types';

export const LOAD_PORTFOLIO: string = 'LOAD_PORTFOLIO';
export const LOAD_PORTFOLIO_SUCCEEDED: string = 'LOAD_PORTFOLIO_SUCCEEDED';
export const LOAD_PORTFOLIO_FAILED: string = 'LOAD_PORTFOLIO_FAILED';
export const LOAD_PORTFOLIO_DETAIL: string = 'LOAD_PORTFOLIO_DETAIL';
export const LOAD_PORTFOLIO_DETAIL_SUCCEEDED: string = 'LOAD_PORTFOLIO_DETAIL_SUCCEEDED';
export const LOAD_PORTFOLIO_DETAIL_FAILED: string = 'LOAD_PORTFOLIO_DETAIL_FAILED';
export const RESET_SELECTED_PORTFOLIO_DETAIL: string = 'RESET_SELECTED_PORTFOLIO_DETAIL';

export function loadPortfolio(): Syn$Action {
  return {
    type: LOAD_PORTFOLIO,
  };
}

export function loadPortfolioDetail(id: string): Syn$Action {
  return {
    type: LOAD_PORTFOLIO_DETAIL,
    payload: id,
  };
}

export function resetSelectedPortfolio(): Syn$Action {
  return {
    type: RESET_SELECTED_PORTFOLIO_DETAIL,
  };
}
