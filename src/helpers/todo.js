import moment from 'moment';
import {dateFormat} from './dateHelper';

export const todo = {
  priorities: [
    'high',
    'medium',
    'low'
  ],
  default: {
    priority: 'medium',
    date: moment(new Date()).add(7, 'days').format(dateFormat)
  }
}
