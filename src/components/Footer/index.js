import React from 'react';
import { Button } from 'react-bootstrap';

export default function() {
    return (
        <center>
            <div>
                <h2 className="bold">Register to be among the first carders</h2>
            </div>

            <span className="divider"></span>
            <div
                className="shadow-lg p-1 mb-5 bg-white  join-input"
                style={{ width: '50%' }}
            >
                <input className="textInput" />
                <Button bsPrefix="join-button">join</Button>
            </div>
        </center>
    );
}
