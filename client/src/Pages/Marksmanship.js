import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import Icon from '../assets/hawkeye.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


function Marksmanship() {
    const navigate = useNavigate();

    return (
        <>
            <div class="container-fluid">
                <div class="mt-2 jumbotron">
                <h1 class="text-center"><Image src={Icon} style={{ width: '4rem' }} />Hawkeye</h1>
                    <h3 class="text-center">Your centralized USAF data hub</h3>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="mt-4 text-center">
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Personal')} style={{ marginRight: '0.25rem' }}>Personal</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Jumps')} style={{ marginRight: '0.25rem' }}>Jumps</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Fitness')} style={{ marginRight: '0.25rem' }}>Fitness</Button>
                            <Button type="button" className="btn btn-primary" onClick={() => navigate('/Marksmanship')} style={{ marginRight: '0.25rem' }}>Marksmanship</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Training')} style={{ marginRight: '0.25rem' }}>Training</Button>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="mt-4 text-center" id="card-row">
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>Example Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Example Title</Card.Title>
                                    <Card.Text>
                                        Just an example of some text we can insert here.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>Example Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Example Title</Card.Title>
                                    <Card.Text>
                                        Just an example of some text we can insert here.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>Example Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Example Title</Card.Title>
                                    <Card.Text>
                                        Just an example of some text we can insert here.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="mt-4 text-center" id="card-row">
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>Example Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Example Title</Card.Title>
                                    <Card.Text>
                                        Just an example of some text we can insert here.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>Example Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>Example Title</Card.Title>
                                    <Card.Text>
                                        Just an example of some text we can insert here.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Marksmanship;