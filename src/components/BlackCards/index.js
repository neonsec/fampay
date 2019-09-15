import React from 'react';
import { Navbar, Nav, Button, Row, Col, Image } from 'react-bootstrap';

export default function() {
    return (
        <Row className="newrow">
            <Col lg={6} xs={12}>
                <br />
            
                <br />
                <h2 className="bold">A Black Card</h2>
                <h2 className="bold">Customizable and free</h2>
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
            <Col lg={6} xs={12} className="centerify">
                <span className="centerify pinkrounded">
                    <Image
                        className="card-img"
                        src="cardfrontkim.png"
                        rounded
                    />
                    <Image
                        src="cardbackdetails.png"
                        rounded
                        className="card-img"
                    />
                </span>
            </Col>
        </Row>
    );
}
