import './inputPass.css'
import React, { useState } from "react";
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { MdPassword } from 'react-icons/md'

const InputPass = ({ className, placeholder }) => {
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
                <input type={showPass ? "text" : "password"} className={className} placeholder={placeholder} value={password} onChange={e => setPassword(e.target.value)} />
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