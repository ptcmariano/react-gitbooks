import React from 'react';
import { Link } from 'react-router';
import AsideContainer from 'ui/aside-container';

export default React.createClass({
    render: function() {
        return (
            <div className="app">
                <nav>
                    <Link to="/">Home</Link><br />
                    <Link to="/books">books</Link>
                </nav>
                <AsideContainer />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
});
