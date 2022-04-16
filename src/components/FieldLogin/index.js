import React from "react";
import Button from "../Button";
import InputEmail from "../InputEmail";
import InputPass from "../InputPass";
import { Link } from 'react-router-dom'
import './fieldLogin.css'



const FieldLogin = () => {
    const titleLogin = "<FaçaSeuLogin />"

    const validEmail = () => {
        var email = document.getElementById('email')["value"];
        var typeEmail = /\S+@\S+\.\S+/;
        if (email === "") {
            document.getElementById("email").style.boxShadow = 'none';
            document.getElementById("validation-email").innerText = (" ")
        } else {
            var validation = typeEmail.test(email);
            if (validation === false) {
                document.getElementById("email").style.boxShadow = '0px 1px 0px 0px red';
                document.getElementById("validation-email").innerText = ("E-mail inválido.")
            } else {
                document.getElementById("email").style.boxShadow = 'none';
                document.getElementById("validation-email").innerText = (" ")
            }
        }
    }
    const cleanValid = () => {
        document.getElementById("email").style.boxShadow = 'none';
        document.getElementById("validation-email").innerText = (" ")
    }

    const entrar = () => {
        validEmail();
        return
    }

    return (
        <>
            <div className="field-login">
                <h2 className="title-login">{titleLogin}</h2>
                <div className="area-login">
                    <InputEmail className='input-Login' placeholder='E-mail' onBlur={validEmail} onFocus={cleanValid} />
                    <div id="validation-email"></div>
                    <InputPass className='input-Login' placeholder='Senha' />
                    <div className="area-button">
                        <Button className='button buttonBlue' onClick={entrar} >Entrar</Button>
                    </div>
                    <div className="botton-login">
                        <li><div id='link-recover'><Link to='/recover-login'>Esqueci a minha senha</Link></div></li>
                        <li><div id='link-register'><Link to='/register'>Cadastrar</Link></div></li>
                    </div>
                </div>
            </div>
        </>

    )
}

export default FieldLogin