import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { todoReducer } from './reducers/todo-reducer';
import { optionsReducer } from './reducers/options-reducer';

// const reducer = combineReducers({
// 	todo: todoReducer,
// });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	todoReducer,
	optionsReducer,
});

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
