import React from "react";
import CardSingle from "./CardSingle";
import mountains from "../../img/mountains.jpg";
import mountains3 from "../../img/mountains3.jpg";
import sky from "../../img/sky.jpg";
import explode from "../../img/explode.jpg";

function Cards(){

    return(
    <div className="container bg-body-secondary text-start mt-4 border rounded p-5">
        <div className="row">
                <CardSingle src={mountains}/>
                <CardSingle src={sky}/>
                <CardSingle src={mountains3}/>
                <CardSingle src={explode}/>
        </div>
    </div>
    )
}

export default Cards