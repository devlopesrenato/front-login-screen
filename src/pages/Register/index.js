import React from 'react'
import './register.css'
import BackImg from '../../components/BackImg'
import FieldRegister from '../../components/FieldRegister'

function Register() {
    return (
        <>
            <div className="register">
                <BackImg src={process.env.PUBLIC_URL + "/img/logo.png"} msgAlt='logo-react' />
                <FieldRegister />
            </div>
        </>
    )
}

export default Register