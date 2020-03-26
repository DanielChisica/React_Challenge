import rootReducer from "../reducers/rootReducer";
import { createStore , applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware.default));

export default store;

