import {action, observable} from 'mobx';

export const searchState = observable({
  keyword: '',
});

export const changeSearchKeyword = action(target => {
  searchState.keyword = target;
});

export const clearSearchKeyword = action(() => {
  searchState.keyword = '';
});
