/* @flow */
import request from 'request';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { SYN_BY_DESIGN_ROUTE } from '../config';
import Test from '../client/test';

import fetchAll from '../services/portfolio';

const ctrl = {};

ctrl.index = (req: express$Request, res: express$Response) => {
  fetchAll()
    .then((portfolio) => {
      const html = renderToString(<Test />);
      res.render('index', {
        html,
        data: portfolio,
      });
    });
  // request.get(`${SYN_BY_DESIGN_ROUTE}/portfolio.json`, (err, resp, body) => {
  //   const html = renderToString(<Test />);
  //   res.render('index', {
  //     html,
  //     data: JSON.parse(body),
  //   });
  // });
};

export default ctrl;