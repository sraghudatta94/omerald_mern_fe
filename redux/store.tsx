import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducer/reducer';

const reducer = (state: any, action: { type: string; payload: any }) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
  );
};

export const wrapper = createWrapper(initStore, {
  debug: true,
  serializeState: state => JSON.stringify(state),
  deserializeState: state => JSON.parse(state),
});

export const store = createStore(reducers, composeWithDevTools());
