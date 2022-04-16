import './inputEmail.css'
import React from "react";
import { MdEmail } from 'react-icons/md'

const InputEmail = ({ className, placeholder, onBlur, onFocus}) => {

    return (
        <>
            <div id='box-input-login' className="input-email">
                <MdEmail />
                <input type="email" id='email' className={className} placeholder={placeholder} onBlur={onBlur} onFocus={onFocus}></input>
            </div>
        </>
    )
};

export default InputEmail