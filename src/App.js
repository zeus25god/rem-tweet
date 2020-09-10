import React from 'react';
import Buttontwi from './Components/Buttontwi';
import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
    return ( <
        Provider store = { store } >
        <
        div style = {
            { height: '620px', width: '1280px', background: '#252C48' }
        } >
        <
        div className = "App" >
        <
        Buttontwi / >
        <
        /div> < /
        div > <
        /Provider>
    );
}

export default App;