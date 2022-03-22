import './inputEmail.css'
import React from "react";
import { MdEmail } from 'react-icons/md'



const InputEmail = ( { className, placeholder } ) => {

    return(
        <>
            <div className="input-email">           
                <MdEmail />
                <input type="email" id='email' className={className} placeholder={placeholder}  ></input>
            </div>
            
        </>
    )
};

export default InputEmail