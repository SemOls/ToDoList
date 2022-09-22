import { useState } from "react";
import { date } from "./date";
import logo from"./left.png";
import './App.css';

function Slaid () {
    const [slaid, setSlaid] = useState(0);
    const {id , name, image} = date[slaid]

    const nextFoto=()=>{
        setSlaid((slaid=>{
            slaid ++;
            if (slaid > date.length-1){
                slaid=0; }
            return slaid;
        }))
    }

        return(
        <div>
        <div className="slaid" key={id}>
    
          <p className="text">{name}</p>
        <p> <img width="150px" src={image} alt="foto" /></p>
          <p onClick={nextFoto}><img alt="arrow" src={logo} width="20px" /></p> 
        </div>
        </div>
    )
}

export default Slaid