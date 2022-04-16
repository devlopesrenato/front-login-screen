import './inputName.css'
import React from "react";
import { FaUser } from 'react-icons/fa'

const InputName = ({ className, placeholder }) => {

    return (
        <>
            <div className="input-name">
                <FaUser />
                <input type="text" id='name' className={className} placeholder={placeholder}  ></input>
            </div>

        </>
    )
};

export default InputName