/* @flow */
import React, { Component } from 'react';
import styles from './PortfolioDetail.css';
import type { Syn$PortfolioDetailComponentProps } from '../../../types';

export default class PortfolioDetail extends Component {

  static defaultProps = {
    params: {},
  };

  componentWillMount() {
    this.props.resetSelectedPortfolio();
  }

  componentWillUnmount() {
    this.props.resetSelectedPortfolio();
  }

  componentDidMount() {
    const {
      portfolioDetail,
      loadPortfolioDetail,
      params,
    } = this.props;

    const id: string = params.id;

    if (!portfolioDetail) {
      loadPortfolioDetail(id);
    }
  }

  props: Syn$PortfolioDetailComponentProps;

  render() {
    const { params, portfolioDetail } = this.props;
    
    if (!portfolioDetail || portfolioDetail.id !== params.id) {
      return (
        <div>Loading...</div>
      );
    }

    const { title, imagePaths = { full: {} }, description, categories = [] } = portfolioDetail;
    return (
      <div className={styles.detail}>
        This is the detail view! {params.id}
        <h1>{title}</h1>
        <img src={imagePaths.full.url} alt={title} />
        <p>{description}</p>
        <ul>
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      </div>
    );
  }
}
