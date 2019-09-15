import React from 'react';
import {
    Row,
    Col,
    Button,
    InputGroup,
    FormControl,
    Image
} from 'react-bootstrap';
import { useWindowDimensions } from '../WindowDimensionsProvider';

export default function(props) {
    const isMobile = useWindowDimensions().width < 415;
    return (
        <>
            <Row className="newrow">
                <Col>
                    <h2>Bank in More </h2>
                    <h2>Simple</h2>
                </Col>
            </Row>
            <Row className="newrow">
                <Col
                    lg={6}
                    md={{ offset: 12, order: isMobile ? 2 : 1 }}
                    sm={{ offset: 12, order: isMobile ? 2 : 1 }}
                    xs={{ offset: 12, order: isMobile ? 2 : 1 }}
                >
                    <p className="introtext">
                        Open your bank account in less than 2 minutes and order
                        your black card, customisable and free for 12 years
                    </p>
                    <p className="introtext">
                        Available on waiting list at the moment: download the
                        app now!
                    </p>
                    <div className="emoji-container">
                        <Col md={6}>
                            <p className="emoji">🎉</p>
                            <p className="emoji-text">0$</p>
                            <p className="emoji-text">Free for life</p>
                        </Col>
                        <Col md={6}>
                            <p className="emoji">🤑</p>
                            <p className="emoji-text">Sponsor your friends</p>
                            <p className="emoji-text">
                                1$ for you, 1$ for them
                            </p>
                        </Col>
                    </div>
                    <br />

                    <div className="shadow-lg p-1 mb-5 bg-white  join-input">
                        <input className="textInput" />
                        <Button bsPrefix="join-button">join</Button>
                    </div>
                    <div className="centerify">
                        <Image
                            src="appstore.png"
                            rounded
                            height={50}
                            style={{ margin: 8, maxWidth: '40%' }}
                        />
                        <Image
                            src="playstore.png"
                            rounded
                            height={50}
                            style={{ margin: 8, maxWidth: '40%' }}
                        />
                    </div>
                </Col>
                <Col
                    lg={6}
                    md={{ offset: 12, order: isMobile ? 1 : 2 }}
                    sm={{ offset: 12, order: isMobile ? 1 : 2 }}
                    xs={{ offset: 12, order: isMobile ? 1 : 2 }}
                    className="centerify"
                >
                    <span
                        className="centerify pinkrounded"
                        style={{
                            paddingTop: -10
                        }}
                    >
                        <Image className="phone-img" src="phone.png" rounded />
                        <Image
                            className="card-kyl-img"
                            src="cardfrontkylin.png"
                            rounded
                        />
                    </span>
                </Col>
            </Row>
        </>
    );
}
