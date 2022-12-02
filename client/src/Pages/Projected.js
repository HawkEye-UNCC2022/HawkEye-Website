import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Icon from '../assets/hawkeye.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { GetSSAN } from "../helper";
import PdfDownloader from "../components/Download";
import CsvDownloadButton from 'react-json-to-csv';


function isNull(value) {
    return value === null ? 'N/A' : value
}

function Projected() {
    const navigate = useNavigate();
    const user = GetSSAN();
    // Logic to fetch the roster
    const [initialData, setInitialData] = useState([{}]);

    useEffect(() => {
        fetch("/project/" + user)
            .then(
                response => response.json())
            .then(
                data => {
                    setInitialData(data)
                }
            )
    }, []);

    return (
        <>
            <div class="container" id="page">
                <div class="container-fluid">
                    <div class="mt-2 jumbotron">
                        <h1 class="text-center"><Image src={Icon} style={{ width: '4rem' }} />Hawkeye</h1>
                        <h3 class="text-center">Your centralized USAF data hub</h3>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="mt-4 text-center">
                                <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Personal')} style={{ marginRight: '0.25rem' }}>Personal</Button>
                                <Button type="button" className="btn btn-secondary" onClick={() => navigate('/AEF')} style={{ marginRight: '0.25rem' }}>AEF</Button>
                                <Button type="button" className="btn btn-primary" onClick={() => navigate('/Projected')} style={{ marginRight: '0.25rem' }}>Projected</Button>
                                <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Marksmanship')} style={{ marginRight: '0.25rem' }}>Marksmanship</Button>
                                <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Training')} style={{ marginRight: '0.25rem' }}>Training</Button>
                                <Button type="button" className="btn btn-secondary" onClick={() => navigate('/IssuedGear')} style={{ marginRight: '0.25rem' }}>Issued Gear</Button>
                                <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Upload')} style={{ marginRight: '0.25rem' }}>Upload</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="mt-4 text-center">
                            <PdfDownloader rootElement="root" downloadFileName='Alpha Roster.pdf' />
                                <div type="button" className="btn btn-success" style={{
                                    marginLeft: "0.25rem"
                                }}>
                                    <CsvDownloadButton data={initialData} filename="export.csv" delimiter="," id="csv" style={{ //pass other props, like styles
                                        color: "#ffffff"
                                    }}
                                    >Export CSV</CsvDownloadButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row" >
                            <div class="mt-4 text-center" id="card-row" >
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>FULL_NAME</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].FULL_NAME)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>SSAN</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].SSAN)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>GRADE</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].GRADE)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row" >
                            <div class="mt-4 text-center" id="card-row" >
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>RECORD_STATUS</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].RECORD_STATUS)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>OFFICE_SYMBOL</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].OFFICE_SYMBOL)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>PROJ_EVAL_CLOSE_DATE</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].PROJ_EVAL_CLOSE_DATE)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row" >
                            <div class="mt-4 text-center" id="card-row" >
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>PROJ_EVAL_RSN</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].PROJ_EVAL_RSN)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>SUPV_NAME</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].SUPV_NAME)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>SUPV_BEGIN_DATE</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].SUPV_BEGIN_DATE)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row" >
                            <div class="mt-4 text-center" id="card-row" >
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>LAST_EVAL_CLOSE_DATE</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].LAST_EVAL_CLOSE_DATE)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>EVAL_TYPE</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].EVAL_TYPE)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>DUTY_TITLE</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].DUTY_TITLE)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row" >
                            <div class="mt-4 text-center" id="card-row" >
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>UIF_CODE</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].UIF_CODE)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>UIF_EXPIRATION_DATE</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].UIF_EXPIRATION_DATE)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>ASSIGNED_PAS</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].ASSIGNED_PAS)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row" >
                            <div class="mt-4 text-center" id="card-row" >
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>ASSIGNED_PAS_CLEARTEXT</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].ASSIGNED_PAS_CLEARTEXT)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>PAS_ADMIN</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].PAS_ADMIN)}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                    <Card.Header>PAS_ADMIN_CLEARTEXT</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{isNull(initialData[0].PAS_ADMIN_CLEARTEXT)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projected;