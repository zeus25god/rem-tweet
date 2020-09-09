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
const notw = useSelector(state => state.notw)
const dispatch = useDispatch()
return ( <
    div >
    <
    Divider orientation = "center" >
    <
    h2 style = {
        { color: 'whitesmoke' } } > Dissapearing Tweets < /h2>

    <
    /Divider> <
    Row >
    <
    Col className = "gutter-row"
    span = { 18 }
    style = {
        { maxHeight: '200px', marginLeft: '160px' } } >
    <
    div style = { style } >
    <
    textarea className = 'txt'
    style = {
        { background: 'white', marginTop: '50px', marginLeft: '30px', width: '700px', maxHeight: '50px' } } > < /textarea> <
    h3 style = {
        { color: 'white' } } > No of Tweets - { notw } < /h3> <
    Button type = "primary"
    onClick = {
        () => dispatch(doTweet()) } >
    Tweet <
    /Button> <
    /div>

    <
    /Col> <
    /Row> <
    Row >
    <
    Col className = "gutter-row"
    span = { 18 }
    style = {
        { margin: '40px 0px 0px 160px' } } >
    <
    div style = { style } > < /div> <
    /Col> <
    /Row>



    <
    /div>
)
}

export default Buttontwi