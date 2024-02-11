import React from "react";
import Button from 'react-bootstrap/Button';


function Jumbotron() {
  return (
    <div className="container bg-body-secondary text-start mt-4 border rounded p-5">
        <div className="row">
            <div className="col">
            <h1>A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore soluta tempore! Recusandae minima hic harum totam accusantium dignissimos dicta incidunt aperiam fugiat, tempore rem facilis voluptatum doloribus in laborum!</p>
            <Button variant="primary">Call to action!</Button>
            </div>
        </div>
    </div>
  );
}

export default Jumbotron;