import {observable, action} from 'mobx';
import {v4 as uuidv4} from 'uuid';

export const feedState = observable({
  feeds: Array.from({length: 10}).map((_, index) => ({
    id: uuidv4(),
    title: String(index),
    body: String(index),
    date: new Date().toISOString(),
  })),
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

export const modifyFeed = action(target => {
  const adjustedFeeds = feedState.feeds.map(feed =>
    feed.id === target.id ? target : feed,
  );
  feedState.feeds = adjustedFeeds;
});

export const deleteFeed = action(target => {
  const adjustedFeeds = feedState.feeds.filter(feed => feed.id !== target.id);
  feedState.feeds = adjustedFeeds;
});

export const filterFeeds = keyword => {
  const filteredFeeds = feedState.feeds.filter(feed =>
    [feed.title, feed.body].some(text => text.includes(keyword)),
  );

  return filteredFeeds;
};
