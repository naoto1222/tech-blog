import { createStore } from 'redux';
import rootReducer from './RootReducer'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState
  );

  return store;
}