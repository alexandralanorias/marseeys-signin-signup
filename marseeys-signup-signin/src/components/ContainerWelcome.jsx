// importing react
import React from 'react';
import { Col } from 'react-bootstrap';

class ContainerWelcome extends React.Component {
    render() {
        // adding top margin
        const marginTop = {
            marginTop: "20px"
        };

        return (
            <div class="container-fluid bg-dark text-white p-5">
                <Col lg={12} style={marginTop}>
                    <div class="container bg-dark p-5">
                        <h1 class="display-4 fw-bold">Sign in to Marseey's!</h1>
                        <hr/>
                    </div>
                </Col>
            </div>
        );
    }
}

export default ContainerWelcome;