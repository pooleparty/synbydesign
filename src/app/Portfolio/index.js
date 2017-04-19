/* @flow */
import { connect } from 'react-redux';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';
import { loadPortfolio, loadPortfolioDetail, resetSelectedPortfolio } from './actions';
import type { Syn$RootState } from '../../../types';
import portfolioDetailSelector from './selectors';

function mapStateToPropsForList({ portfolio, portfolioLoaded }: Syn$RootState) {
  return {
    portfolio,
    portfolioLoaded,
  };
}

export const PortfolioListContainer = connect(
  mapStateToPropsForList,
  { loadPortfolio },
)(PortfolioList);

function mapStateToPropsForDetail(state: Syn$RootState) {
  return {
    portfolioDetail: portfolioDetailSelector(state),
    portfolioLoaded: state.portfolioLoaded,
  };
}

export const PortfolioDetailContainer = connect(
  mapStateToPropsForDetail,
  { loadPortfolioDetail, resetSelectedPortfolio },
)(PortfolioDetail);
