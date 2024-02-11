import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

export default function CardSingle(props){
    const styles={
        maxWidth: "18rem",
        minWidth: "14rem",
    }
    const stylesCol={
        marginBottom: "35px"
    }

    return(
        <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-center" style={stylesCol}>
            <div className="card text-center" style={styles}>
                <div className="card-body">
                    <img src={props.src} className="card-img-top"/>
                    <h5 className="card-title mt-2">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
