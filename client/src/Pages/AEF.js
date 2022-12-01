import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import Icon from '../assets/hawkeye.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { GetSSAN } from '../helper.js';
import Downloader from "../components/Download";


function isNull(value) {
    return value === null ? 'N/A' : value
}

function AEF() {

    const navigate = useNavigate();
    const user = GetSSAN();
    // Logic to fetch the roster
    const [initialData, setInitialData] = useState([{}]);

    useEffect(() => {
        fetch("/aef/" + user)
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
            <div class="container-fluid">
                <div class="mt-2 jumbotron">
                    <h1 class="text-center"><Image src={Icon} style={{ width: '4rem' }} />Hawkeye</h1>
                    <h3 class="text-center">Your centralized USAF data hub</h3>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="mt-4 text-center">
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Personal')} style={{ marginRight: '0.25rem' }}>Personal</Button>
                            <Button type="button" className="btn btn-primary" onClick={() => navigate('/AEF')} style={{ marginRight: '0.25rem' }}>AEF</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Projected')} style={{ marginRight: '0.25rem' }}>Projected</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Marksmanship')} style={{ marginRight: '0.25rem' }}>Marksmanship</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Training')} style={{ marginRight: '0.25rem' }}>Training</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/IssuedGear')} style={{ marginRight: '0.25rem' }}>Issued Gear</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Upload')} style={{ marginRight: '0.25rem' }}>Upload</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => Downloader(initialData[0])} style={{ marginRight: '0.25rem' }}>Download</Button>
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
                                <Card.Header>DUTY STATUS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DUTY_STATUS)}</Card.Title>
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
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>AEF_STATUS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].AEF_STATUS)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>AEF_START_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].AEF_START_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>INDIVIDUAL_DWELL_TIME</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].INDIVIDUAL_DWELL_TIME)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>INDIVIDUAL_DWELL_TIME_EXP</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].INDIVIDUAL_DWELL_TIME_EXP)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>INDIVIDUAL_DWELL_TIME_CNTR</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].INDIVIDUAL_DWELL_TIME_CNTR)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_AVAIL_ADMIN</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_AVAIL_ADMIN)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_AVAIL_ADMIN_EXP_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_AVAIL_ADMIN_EXP_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_AVAIL_TIME</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_AVAIL_TIME)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_AVAIL_TIME_EXP_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_AVAIL_TIME_EXP_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_AVAIL_PHYS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_AVAIL_PHYS)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_AVAIL_PHYS_EXP_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_AVAIL_PHYS_EXP_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_AVAIL_LEGAL</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_AVAIL_LEGAL)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DEPLOY_AVAIL_LEGAL_EXP_DATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DEPLOY_AVAIL_LEGAL_EXP_DATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
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
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>DAFSC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].DAFSC)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>PAFSC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].PAFSC)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>AFSC_2</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].AFSC_2)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>TDY_CNTRY_STATE</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].TDY_CNTRY_STATE)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>UNIT_DESC</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].UNIT_DESC)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>PAS</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].PAS)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>PAS_CLEARTEXT</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].PAS_CLEARTEXT)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_01</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_01)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_02</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_02)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_03</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_03)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_04</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_04)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_05</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_05)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_06</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_06)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_07</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_07)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_08</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_08)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_09</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_09)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_PAFSC_10</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_PAFSC_10)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_01</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_01)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_02</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_02)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_03</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_03)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_04</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_04)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_05</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_05)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_06</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_06)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_07</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_07)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row" >
                        <div class="mt-4 text-center" id="card-row" >
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_08</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_08)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_09</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_09)}</Card.Title>
                                </Card.Body>
                            </Card>
                            <br />
                            <Card border="primary" style={{ width: '14rem', marginRight: '1rem' }}>
                                <Card.Header>SEI_2AFSC_10</Card.Header>
                                <Card.Body>
                                    <Card.Title>{isNull(initialData[0].SEI_2AFSC_10)}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AEF