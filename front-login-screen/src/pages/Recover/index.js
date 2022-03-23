import React from 'react'
import './recover.css'
import PassRecover from '../../components/PassRecover'
import BackImg from '../../components/BackImg'

function Recover() {
    return (
        <>
        <div className="recover">
            <BackImg src={process.env.PUBLIC_URL + "/img/logo.png"} msgAlt='logo-react' />
            <PassRecover />
        </div>
        </>
    )
}

export default Recover