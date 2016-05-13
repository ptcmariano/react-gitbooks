import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="books-page">
                <h1>App: Books</h1>
                <ul>
                    {this.props.users.map((book, i) => {
                        return (
                            <li key={book.id} onClick={this.props.onClick}>{book.name}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});