import {observable, action} from 'mobx';

export const feedState = observable({
  message: '',
});

export const setMessage = action((state, value) => {
  state.message = value;
});
