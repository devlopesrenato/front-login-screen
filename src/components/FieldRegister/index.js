import React from "react";
import Button from "../Button";
import InputEmail from "../InputEmail";
import InputPass from "../InputPass";
import { Link } from 'react-router-dom'
import './fieldRegister.css'
import InputName from "../InputName";



const FieldRegister = () => {
    const titleLogin = "<Cadastrar />"

    return (
        <>
            <div className="field-register">
                <h2 className="title-register">{titleLogin}</h2>
                <div id="validation-email"></div>
                <div className="area-login">
                    <InputName className='input-register' placeholder='Nome completo' />
                    <InputEmail className='input-register' placeholder='Seu E-mail' />
                    <InputPass className='input-register' placeholder='Sua senha' />
                    <InputPass className='input-register' placeholder='Repita sua senha' />
                    <div className="area-button">
                        <Button className='button buttonBlue'>Cadastrar</Button>
                    </div>
                    <div className="botton-register">
                        <li ><div id='link-back'><Link to='/login'>Voltar</Link></div></li>
                    </div>
                </div>
            </div>
        </>

    )
}

export default FieldRegister