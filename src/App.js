import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';

const { Paragraph } = Typography;
const style = { background: '#252C48', padding: '8px 0' };

function Buttontwi() {

    const [lengthLimitedStr, setLengthLimitedStr] = useState(
        'This is an editable text with limited length.',
    );
    return ( <
        div >
        <
        Divider orientation = "center" > Responsive < /Divider> <
        Row >
        <
        Col className = "gutter-row"
        span = { 18 } >
        <
        div style = { style } >
        <
        Paragraph editable = {
            {
                onChange: setLengthLimitedStr,

                autoSize: { maxRows: 5, minRows: 3 },
            }
        }
        style = {
            { background: 'white', marginTop: '100px', marginLeft: '270px' }
        } > { lengthLimitedStr } <
        /Paragraph>

        <
        /div> < /
        Col > <
        /Row> <
        Row >
        <
        Col className = "gutter-row"
        span = { 12 } >
        <
        div style = { style } > < /div> < /
        Col > <
        /Row>

        <
        Button type = "primary" >
        Tweet <
        /Button>

        <
        /div>
    )
}

export default Buttontwi