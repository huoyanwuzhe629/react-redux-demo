import React, { Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}

export default App

