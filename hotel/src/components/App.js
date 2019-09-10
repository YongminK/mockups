import React, { Component } from "react";

import Header from './Common/Header';
import Main  from './Common/Main';
import Footer from './Common/Footer';

import '../style/App.css';

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        );
    }
}

export default App;