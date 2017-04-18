/* @flow */
import { connect } from 'react-redux';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';
import { loadPortfolio, loadPortfolioDetail, resetSelectedPortfolio } from './actions';
import type { Syn$RootState } from '../../../types';
import portfolioDetailSelector from './selectors';

function mapStateToPropsForList({ portfolio }: Syn$RootState) {
  return {
    portfolio,
  };
}

export const PortfolioListContainer = connect(
  mapStateToPropsForList,
  { loadPortfolio },
)(PortfolioList);

function mapStateToPropsForDetail(state: Syn$RootState) {
  return {
    portfolioDetail: portfolioDetailSelector(state),
  };
}

export const PortfolioDetailContainer = connect(
  mapStateToPropsForDetail,
  { loadPortfolioDetail, resetSelectedPortfolio },
)(PortfolioDetail);
