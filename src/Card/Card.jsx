import React from 'react';
import './Card.css';


const Card = (props) => (
 <div className="card-container">
     <div className="card">
         <div className="front">
             <div className="term">{props.term}</div>
         </div>
         <div className="front back">
             <div className="definition"> {props.define}               
             </div>
         </div>
     </div>
 </div>
)

export default Card