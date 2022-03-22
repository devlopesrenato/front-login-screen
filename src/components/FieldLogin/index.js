import React from "react";
import Button from "../Button";
import InputEmail from "../InputEmail";
import InputPass from "../InputPass";

import './fieldLogin.css'



const FieldLogin = () => {
    const titleLogin = "<FaçaSeuLogin />"

    

    return(
        <>
        <div className="field-login">
            <h2 className="title-login">{titleLogin}</h2>
                <div id="validation-email"></div>
            <div className="area-login">
                <InputEmail className='input-Login' placeholder='E-mail' />
                <InputPass className='input-Login' placeholder='Senha' />   
                <div className="area-button">
                    <Button className='button buttonBlue'>Entrar</Button>
                </div>
            <div className="botton-login">
                <p >Esqueci a minha senha</p>
                <p >Cadastrar</p>
            </div>
            </div>
        </div>
        </>

    )
}

export default FieldLogin