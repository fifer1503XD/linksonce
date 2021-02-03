import React from 'react';
import logocol from './logocol.png'
import './App.css';
import {clases} from'./class'
const Printclass = () => {
  
          
  

    return (
        clases.map((map)=>{
            return(
                <div className="perfil"> {map.NombreProfe}
                <a className="imgperfil" title="linkprofe" href={map.Link}><img src="data:image/png;base64,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" alt="Los Tejos" /></a>
            
                </div>
                
            )
        })
                            
    )
    
}

export default Printclass