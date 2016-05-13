import React from 'react';
import books from './books';
import { connect } from 'react-redux';
import { getbooks } from 'api/book';

/**
 * The stuff commented out below represents what a beginner might do 
 * if they didn't understand how to use react-redux correctly
 */

const bookContainer = React.createClass({

    // getInitialState: function() {
    //     return {
    //         books: []
    //     }
    // },

    componentWillMount: function() {
        //var _this = this;
        getbooks();
        // .then(function(response) {
        //     _this.setState({
        //         books: response.data
        //     })
        // })
    },

    render: function() {
        // return (
        //     <books books={this.state.books}/>
        // )
        return (
            <books {...this.props} />
        )
    }
});

const stateToProps = function(state) {
    return {
        books: state.bookReducer.books
    }
}

const dispatchToProps = function(dispatch) {
    // In a real app, you would 'dispatch' an action here based
    // on the book being clicked
    return {
        onClick: () => {console.log('book was clicked')}
    }
}

export default connect(stateToProps, dispatchToProps)(bookContainer)
