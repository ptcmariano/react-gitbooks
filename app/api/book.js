import axios from 'axios';
import store from 'store';

export function getbooks() {
    return axios.get('https://api.gitbook.com/books/all?limit=10').then(function(response) {

        store.dispatch({
            type: 'GET_BOOKS',
            books: response.data
        })

        return response;

    }).catch(function(err) {
        console.error(err);
    });
}
