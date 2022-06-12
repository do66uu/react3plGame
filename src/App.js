import React from 'react';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import './styles/App.css'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Slider/>
            <Footer/>
        </div>
    );
};

export default App;