import React from 'react';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import './styles/App.css'
import Text from "./components/Text";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Slider/>
            <Text disabled>123</Text>
            <Text italic>123</Text>
            <Text strong>123</Text>
            <Footer/>
        </div>
    );
};

export default App;