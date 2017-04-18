/* @flow */
import React, { Component } from 'react';
import styles from './PortfolioDetail.css';
import type { Syn$PortfolioDetailComponentProps } from '../../../types';

export default class PortfolioDetail extends Component {
  componentDidMount() {
    const {
      portfolioDetail,
      loadPortfolioDetail,
      params,
    } = this.props;

    const id: string = params.id;

    if (!portfolioDetail.title) {
      loadPortfolioDetail(id);
    }
  }
  props: Syn$PortfolioDetailComponentProps;
  
  static defaultProps = {
    portfolioDetail: {
      categories: [],
      imagePaths: {
        full: {}
      }
    },
    params: {},
  };

  render() {
    const { params, portfolioDetail } = this.props;
    console.log('Inside PortfolioDetail Component', 'portfolioDetail', portfolioDetail);
    const { title, imagePaths, description, categories } = portfolioDetail;
    return (
      <div className={styles.detail}>
        This is the detail view! {params.id}
        <h1>{title}</h1>
        <img src={imagePaths.full.url} />
        <ul>
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      </div>
    );
  }
}
