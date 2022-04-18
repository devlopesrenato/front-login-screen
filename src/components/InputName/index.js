import './inputName.css'
import React from "react";
import { FaUser } from 'react-icons/fa'

const InputName = ({ className, placeholder, onClick }) => {

    return (
        <>
            <div className="input-name">
                <FaUser />
                <input type="text" id='name' onClick={onClick} className={className} placeholder={placeholder}  ></input>
            </div>

        </>
    )
};

export default InputName