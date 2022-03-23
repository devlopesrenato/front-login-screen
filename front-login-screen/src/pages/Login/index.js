import React from 'react'
import './login.css'
import FieldLogin from '../../components/FieldLogin'
import BackImg from '../../components/BackImg'

function Login() {
    return (
        <>
            <div className="login">
                <BackImg src={process.env.PUBLIC_URL + "/img/logo.png"} msgAlt='logo-react' />
                <FieldLogin />
            </div>
        </>
    )
}

export default Login