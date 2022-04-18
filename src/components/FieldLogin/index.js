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
            cleanValidEmail();
            return "";
        } else {
            var validation = typeEmail.test(email);
            if (validation === false) {
                document.getElementById("email").style.boxShadow = '0px 1px 0px 0px red';
                document.getElementById("validation-email").innerText = ("E-mail inválido.")
                return false;
            } else {
                cleanValidEmail();
                return true;
            }
        }
    }
    const validPass = () => {
        var pass = document.getElementById('pass')["value"];
        if (pass === "") {
            document.getElementById("pass").style.boxShadow = '0px 1px 0px 0px red';
            document.getElementById("validation-pass").innerText = ("Digite sua senha.")
            return false;
        } else {
            cleanValidPass();
            return true;
        }
    }
    const cleanValidEmail = () => {
        document.getElementById("email").style.boxShadow = 'none';
        document.getElementById("validation-email").innerText = (" ")
    }
    const cleanValidPass = () => {
        document.getElementById("pass").style.boxShadow = 'none';
        document.getElementById("validation-pass").innerText = (" ")
    }

    const entrar = () => {
        validEmail();
        validPass();
        if (validEmail() === true && validPass() === true) {
            const email = document.getElementById('email')["value"],
                pass = document.getElementById('pass')["value"],
                itensLocal = localStorage.length;
            var verifyUser = false;
            var nameUser;
            for (let i = 0; i < itensLocal; i++) {
                var arr = localStorage.getItem(`regUser${i}`);
                var arrLocal = JSON.parse(arr);
                if (arrLocal[0] === email && arrLocal[1] === pass) {
                    verifyUser = true
                    nameUser = arrLocal[2];
                }
            }
            if (verifyUser === true) {
                localStorage.setItem('logedUser', nameUser);
                window.location.href = '/home'
            } else {
                document.getElementById("validation-pass").innerText = ("E-mail ou senha incorretos.")
            }

        } else if (validEmail() === "") {
            document.getElementById("email").style.boxShadow = '0px 1px 0px 0px red';
            document.getElementById("validation-email").innerText = ("Digite seu e-mail.")
        }
    }

    return (
        <>
            <div className="field-login">
                <h2 className="title-login">{titleLogin}</h2>
                <div className="area-login">
                    <InputEmail className='input-Login' placeholder='E-mail' onBlur={validEmail} onFocus={cleanValidEmail} />
                    <div id="validation-email"></div>
                    <InputPass id={'pass'} className='input-Login' placeholder='Senha' onFocus={cleanValidPass} onKeyUp={validPass} />
                    <div id="validation-pass"></div>
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