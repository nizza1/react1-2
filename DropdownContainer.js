import './DropdownStyle.css';

import React,{useState} from 'react';


const DropdownContainer = () => {
    const [toggle, setToggle] = useState(false);
    return ( 
        <div className="dropDownContainer">
           
               <h1>Why React is greate   <button onClick={()=>setToggle(!toggle)}>+</button></h1>

               {
                toggle?<p>Fast Learning Curve</p>:null
               }
              
         
         </div>
     );
}

 
export default DropdownContainer;