import React from "react";
import InputEmail from "../InputEmail";
import Button from "../Button";
import { Link } from 'react-router-dom'
import './passRecover.css'

const PassRecover = () => {
    const titleLogin = "<RecuperarSenha />"
    return (
        <div className="field-recover">
            <h2 className="title-recover">{titleLogin}</h2>
            <div className="area-recover">
                <div id="validation-email"></div>
                <InputEmail className='input-Login' placeholder='E-mail' />
                <div className="area-button">
                    <Button className='button buttonBlue'>Recuperar senha</Button>
                </div>
                <div className="botton-recover">
                    <li><div id='link-back'><Link to='/login'>Voltar</Link></div></li>
                </div>
            </div>
        </div>
    )
}

export default PassRecover;