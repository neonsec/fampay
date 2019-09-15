import React from 'react';
import {
    Row,
    Col,
    Button,
    InputGroup,
    FormControl,
    Image,
    ResponsiveEmbed
} from 'react-bootstrap';
import { useWindowDimensions } from '../WindowDimensionsProvider';

export default function(props) {
    const isMobile = useWindowDimensions().width < 415;
    return (
        <Row className="newrow">
            <Col
                lg={6}
                md={{ offset: 12, order: isMobile ? 1 : 2 }}
                sm={{ offset: 12, order: isMobile ? 1 : 2 }}
                xs={{ offset: 12, order: isMobile ? 1 : 2 }}
            >
                <br />
                <h2 className="bold">By the way its even better together</h2>

                <span className="divider"></span>

                <br />
                <ul className="tick">
                    <li>
                        <p>Pay online and in store safely</p>
                        <Image className="tick-icon" src={'tick.svg'} />
                    </li>
                    <li>
                        <Image className="tick-icon" src={'tick.svg'} />
                        <p>Customise your card</p>
                    </li>
                    <li>
                        <p>
                            Block and unblock it in the app and choose your code
                        </p>
                        <Image className="tick-icon" src={'tick.svg'} />
                    </li>
                </ul>
            </Col>
            <Col
                lg={6}
                md={{ offset: 12, order: isMobile ? 2 : 1 }}
                sm={{ offset: 12, order: isMobile ? 2 : 1 }}
                xs={{ offset: 12, order: isMobile ? 2 : 1 }}
            >
                <div
                    style={{
                        minWidth: isMobile ? '50%' : '100%',
                        marginTop: isMobile ? 0 : 30
                    }}
                >
                    <video
                        width="300"
                        height="300"
                        type="video/mov"
                        src="money_disburse.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </Col>
        </Row>
    );
}
