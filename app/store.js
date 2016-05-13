import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Reducers
import bookReducer from './reducers/book';

// Combine Reducers
var reducers = combineReducers({
    bookReducer: bookReducer
    // more if you want...
});

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;