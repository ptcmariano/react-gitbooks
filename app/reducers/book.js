var bookInitialState = {
    books: []
};

export default function(state = bookInitialState, action) {
    switch(action.type) {
        
        case 'GET_BOOKS':
            var newState = Object.assign({}, state);
            newState.books = action.books;
            return newState;

        default:
            return state;
            
    }
}