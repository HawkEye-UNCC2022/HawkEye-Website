import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Icon from '../assets/hawkeye.png'
import PdfDownloader from "../components/Download";
import { GetSSAN } from "../helper";
import CsvDownloadButton from 'react-json-to-csv';
import Downloader from "../components/Download";


function isNull(value) {
    return value === null ? 'N/A' : value
}

function Personal() {

    const navigate = useNavigate();
    const user = GetSSAN();
    // Logic to fetch the roster
    const [initialData, setInitialData] = useState([{}]);

    useEffect(() => {
        fetch("/alpha/" + user)
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
            {/* 
            Ex: Access JSON key value using this method:
            {initialData[0].SSAN} 
         */}
            <div className="container" id="page">
                <div className="container-fluid">
                    <div className="mt-2 jumbotron">
                        <h1 className="text-center"><Image src={Icon} style={{ width: '4rem' }} />Hawkeye</h1>
                        <h3 className="text-center">Your centralized USAF data hub</h3>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="mt-4 text-center">
                                <Button type="button" className="btn btn-primary" onClick={() => navigate('/Personal')} style={{ marginRight: '0.25rem' }}>Personal</Button>
                                <Button type="button" className="btn btn-secondary" onClick={() => navigate('/AEF')} style={{ marginRight: '0.25rem' }}>AEF</Button>
                                <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Projected')} style={{ marginRight: '0.25rem' }}>Projected</Button>
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
                            <Downloader rootElement="root" downloadFileName='Alpha Roster.pdf' />
                                <div type="button" className="btn btn-success" style={{
                                    marginLeft: "0.25rem"
                                }}>
                                    <CsvDownloadButton data={initialData} filename="export.csv" delimiter="," id="csv" style={{
                                        color: "#ffffff"
                                    }}
                                    >Export CSV</CsvDownloadButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
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
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>ASSIGNED PAS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].ASSIGNED_PAS)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>ASSIGNED PAS CLEARTEXT</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].ASSIGNED_PAS_CLEARTEXT)}</Card.Title>
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
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DOR</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DOR)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DAFSC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DAFSC)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>CAFSC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].CAFSC)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>PAFSC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].PAFSC)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>2AFSC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0]["2AFSC"])}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>3AFSC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0]["3AFSC"])}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>4AFSC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0]["4AFSC"])}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DATE_ARRIVED_STATION</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DATE_ARRIVED_STATION)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DUTY_PHONE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DUTY_PHONE)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>TAFMSD</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].TAFMSD)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DOE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DOE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>HOME_ADDRESS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].HOME_ADDRESS)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>HOME_CITY</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].HOME_CITY)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>HOME_STATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].HOME_STATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>HOME_ZIP_CODE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].HOME_ZIP_CODE)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SUPV_NAME</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SUPV_NAME)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>PROJ_EVAL_CLOSE_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].PROJ_EVAL_CLOSE_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>RNLTD</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].RNLTD)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>GAINING_PAS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].GAINING_PAS)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>GAINING_PAS_CLEARTEXT</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].GAINING_PAS_CLEARTEXT)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>HOME_PHONE_NUMBER</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].HOME_PHONE_NUMBER)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEROS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEROS)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_PHYS_STATUS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_PHYS_STATUS)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_PHYS_STATUS_CLEARTEXT</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_PHYS_STATUS_CLEARTEXT)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_PHYS_STOP_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_PHYS_STOP_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_TIME_STATUS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_TIME_STATUS)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_TIME_STATUS_CLEARTEXT</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_TIME_STATUS_CLEARTEXT)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_TIME_STOP_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_TIME_STOP_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>AVAILABILITY_CODE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].AVAILABILITY_CODE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>AVAILABILITY_CODE_CLEARTEXT</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].AVAILABILITY_CODE_CLEARTEXT)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>AVAILABILITY_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].AVAILABILITY_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>LIMITATION_CODE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].LIMITATION_CODE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>LIMITATION_END_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].LIMITATION_END_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem', marginBottom: '1rem' }}>
                                <Card.Header>SEC_CLR</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEC_CLR)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Personal;