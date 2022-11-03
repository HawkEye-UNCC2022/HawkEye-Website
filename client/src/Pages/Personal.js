import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Icon from '../assets/hawkeye.png'


function Personal() {
    const navigate = useNavigate();

    const [initialData, setInitialData] = useState([{}]);

    useEffect(() => {
        fetch("/alpha/111111111")
        .then(
           response => response.json())
        .then(
            data => {
                setInitialData(data)
                console.log(data)
            }
        )
    },[]);

    return (
        <>
            
         <p>{initialData[0].SSAN}</p>
            <div class="container-fluid">
                <div class="mt-2 jumbotron">
                    <h1 class="text-center"><Image src={Icon} style={{ width: '4rem' }} />Hawkeye</h1>
                    <h3 class="text-center">Your centralized USAF data hub</h3>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="mt-4 text-center">
                            <Button type="button" className="btn btn-primary" onClick={() => navigate('/Personal')} style={{ marginRight: '0.25rem' }}>Personal</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Jumps')} style={{ marginRight: '0.25rem' }}>Jumps</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Fitness')} style={{ marginRight: '0.25rem' }}>Fitness</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Marksmanship')} style={{ marginRight: '0.25rem' }}>Marksmanship</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Training')} style={{ marginRight: '0.25rem' }}>Training</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/IssuedGear')} style={{ marginRight: '0.25rem' }}>Issued Gear</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row" >
                    <div class="mt-4 text-center" id="card-row" >
                        <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                            <Card.Header>Name</Card.Header>
                            <Card.Body>
                                <Card.Title>{initialData[0].FULL_NAME}</Card.Title>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                            <Card.Header>Rank</Card.Header>
                            <Card.Body>
                                <Card.Title>{initialData[0].GRADE}</Card.Title>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                            <Card.Header>Home Address</Card.Header>
                            <Card.Body>
                                <Card.Title>{initialData[0].HOME_ADDRESS}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="mt-4 text-center" id="card-row" >
                        <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                            <Card.Header>Marital Status</Card.Header>
                            <Card.Body>
                                <Card.Title>{initialData[0].MARITAL_STATUS}</Card.Title>
                            </Card.Body>
                        </Card>
                        <br />
                        <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                            <Card.Header>Supervisor</Card.Header>
                            <Card.Body>
                                <Card.Title>{initialData[0].SUPV_NAME}</Card.Title>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Personal;