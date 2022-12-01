import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
//import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Icon from '../assets/hawkeye.png';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


function Upload() {
    const navigate = useNavigate();
    
    // https://medium.com/@mp.hladun/how-to-upload-a-file-from-react-to-flask-89cafa000ba1
    // the react post request sender
    const uploadFile = async (e) => {
        const file = e.target.files[0];
        if (file != null) {
            const data = new FormData();
            data.append('file_from_react', file);

            let response = await fetch('/url_route',
                {
                    method: 'post',
                    body: data,
                }
            );
            let res = await response.json();
            if (res.status !== 1) {
                alert('Error uploading file');
            } else {
                alert('File Successfully Uploaded!!');
            }
        }
    };


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
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/AEF')} style={{ marginRight: '0.25rem' }}>AEF</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Projected')} style={{ marginRight: '0.25rem' }}>Projected</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Marksmanship')} style={{ marginRight: '0.25rem' }}>Marksmanship</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/Training')} style={{ marginRight: '0.25rem' }}>Training</Button>
                            <Button type="button" className="btn btn-secondary" onClick={() => navigate('/IssuedGear')} style={{ marginRight: '0.25rem' }}>Issued Gear</Button>
                            <Button type="button" className="btn btn-primary" onClick={() => navigate('/Upload')} style={{ marginRight: '0.25rem' }}>Upload</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "center" }}>
                <h1>REACTJS CSV IMPORT EXAMPLE </h1>
                <form>
                    <input
                        type={"file"}
                        id={"csvFileInput"}
                        accept={".csv"}
                        onChange={uploadFile} // handleOnChange
                    />
                </form>
            </div>
        </>
    );
}

export default Upload;