import './inputPass.css'
import React, { useState } from "react";
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { MdPassword } from 'react-icons/md'

const InputPass = ({ className, placeholder, onFocus, id, onKeyUp }) => {
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShowPass(!showPass);
    }

    return (
        <>
            <div className="input-password">
                <MdPassword />
                <input type={showPass ? "text" : "password"} id={id} className={className} placeholder={placeholder} value={password} onFocus={onFocus} onChange={e => setPassword(e.target.value)} onKeyUp={onKeyUp} />
                <div className="login-eye">
                    {showPass ? (
                        <HiEye
                            onClick={handleClick}
                        />
                    ) : (
                        <HiEyeOff
                            onClick={handleClick}
                        />
                    )}
                </div>
            </div>
        </>
    )
};

export default InputPass