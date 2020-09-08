import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';

const { Paragraph } = Typography;
const style = { background: '#34416e', padding: '8px 0', maxWidth: '1200px' };

function Buttontwi() {

    const [lengthLimitedStr, setLengthLimitedStr] = useState(
        'This is an editable text with limited length.',
    );
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
        Paragraph editable = {
            {
                onChange: setLengthLimitedStr,
                autoSize: { maxRows: 5, minRows: 3 }
            }
        }
        style = {
            { background: 'white', marginTop: '110px', marginLeft: '30px', maxWidth: '900px' }
        } > { lengthLimitedStr } <
        /Paragraph> <
        Button type = "primary" >
        Tweet <
        /Button> < /
        div >

        <
        /Col> < /
        Row > <
        Row style = {
            { background: "#34416e", marginLeft: '160px', marginTop: '100px', maxWidth: '960px' }
        } >
        <
        Col className = "gutter-row"
        span = { 18 } >
        <
        div style = { style } > < /div> < /
        Col > <
        /Row>



        <
        /div>
    )
}

export default Buttontwi