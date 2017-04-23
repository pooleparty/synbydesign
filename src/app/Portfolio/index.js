/* @flow */
import { connect } from 'react-redux';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';
import { loadPortfolio, loadPortfolioDetail, resetSelectedPortfolio } from './actions';
import type { Syn$RootState, Syn$Portfolio } from '../../../types';
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

function mapStateToPropsForDetail(state: Syn$RootState, props: Object) {
  const { params } = props;
  const { id }: { id: string} = params;
  let portfolioDetail: ?Syn$Portfolio;

  if (state.selectedPortfolioId) {
    portfolioDetail = portfolioDetailSelector(state);
  }

  return {
    portfolioDetail,
    portfolioLoaded: state.portfolioLoaded,
  };
}

export const PortfolioDetailContainer = connect(
  mapStateToPropsForDetail,
  { loadPortfolioDetail, resetSelectedPortfolio },
)(PortfolioDetail);
