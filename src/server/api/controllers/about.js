/* @flow */
import winston from 'winston';
import aboutService from '../../services/about';
import type {
  Syn$AboutController,
} from '../../../../types';

const ctrl: Syn$AboutController = {
  index(req, res) {
    aboutService.fetch().then((about) => {
      winston.log('Got to about API', about);
      res.json(about);
    });
  },
};

export default ctrl;
