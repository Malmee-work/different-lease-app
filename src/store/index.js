import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose  } from 'redux';
import { logger, crashReporter} from '../middleware';
import rootReducer from "../reducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk,logger, crashReporter))
)

export default store;