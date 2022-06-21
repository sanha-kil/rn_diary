import {observable, action} from 'mobx';
import {v4 as uuidv4} from 'uuid';

export const feedState = observable({
  feeds: [],
});

export const createFeed = action((title, body, date) => {
  const target = {
    id: uuidv4(),
    title,
    body,
    date,
  };
  feedState.feeds = [target, ...feedState.feeds];
});
