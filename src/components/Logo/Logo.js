import React from "react";
import Tilt from "react-parallax-tilt";
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt style={{width:"150px"}}>
        <div className="Tilt br2 shadow-2 pa3" style={{width:"150px",height: "150px"}} tiltReverse = {true}>
            <img src={brain} alt="Logo" style={{paddingTop:'5px'}} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
