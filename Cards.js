import React from "react";
import CardItems from "./CardItems";
import { DetailFeatures } from "./Content";
import './style.css'

const Cards = () => {
  return (
    <>
    <div className="container-fluid cards my-3 ">
      <h2 style={{fontWeight:'bolder', color:' #257e9e'}}>Destinations</h2>
      <div className="row">
        {DetailFeatures.map((features)=>{
          return  <div className="col-md-4">
            <CardItems tittle={features.tittle} desc={features.desc} imgUrl={features.img}/>
            </div>
        })}
      </div>
    </div>

        <div className="container-fluid">
          <div className="container">
            <div className="row">
              
        {DetailFeatures.map((features)=>{
          return  <div className="col-md-4">
            <CardItems tittle={features.tittle} desc={features.desc} imgUrl={features.img}/>
            </div>
        })}
            </div>
          </div>

        </div>
        </>
  );
};

export default Cards;
