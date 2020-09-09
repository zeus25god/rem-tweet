import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';

import { useSelector, useDispatch } from 'react-redux'

import { doTweet } from '../Redux/action';

const { Paragraph } = Typography;
const style = { background: '#34416e', padding: '8px 0' };

function Buttontwi() {


    const notw = useSelector(state => state.notw)
    const dispatch = useDispatch()
    return ( <
        div >
        <
        Divider orientation = "center" >
        <
        h2 style = {
            { color: 'whitesmoke' }
        } > Dissapearing Tweets < /h2>

        <
        /Divider> <
        Row >
        <
        Col className = "gutter-row"
        span = { 18 }
        style = {
            { maxHeight: '200px', marginLeft: '160px' }
        } >
        <
        div style = { style } >
        <
        textarea className = 'txt'
        style = {
            { background: 'white', marginTop: '50px', marginLeft: '30px', width: '700px', maxHeight: '50px' }
        } > < /textarea> <
        h3 style = {
            { color: 'white' }
        } > No of Tweets - { notw } < /h3> <
        Button type = "primary"
        onClick = {
            () => dispatch(doTweet())
        } >
        Tweet <
        /Button> < /
        div >

        <
        /Col> < /
        Row > <
        Row >
        <
        Col className = "gutter-row"
        span = { 18 }
        style = {
            { margin: '40px 0px 0px 160px' }
        } >
        <
        div style = { style } > < /div> < /
        Col > <
        /Row>



        <
        /div>
    )
}

export default Buttontwi