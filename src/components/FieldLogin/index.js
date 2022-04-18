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
            // colentando os dados digitados
            const email = document.getElementById('email')["value"],
                pass = document.getElementById('pass')["value"];
            // defini a verificação de usuário como falso para não aceitar o login
            var verifyUser = false;
            var nameUser; //variavel para receber o nome do usuário

            var arrUsers = JSON.parse(localStorage.getItem('users'));
            if (arrUsers !== null) {
                var listUsers = arrUsers;
                let checkEmail = listUsers.filter((item) => item.email === email);
                console.log(checkEmail);
                if (checkEmail.length !== 0) {
                    if (checkEmail[0].email === email) {
                        if (checkEmail[0].pass === pass) {
                            nameUser = checkEmail[0].name
                            verifyUser = true;
                        } else {
                            document.getElementById("pass").style.boxShadow = '0px 1px 0px 0px red';
                            document.getElementById("validation-pass").innerText = ("Senha incorreta.")
                        }
                    }
                } else {
                    document.getElementById("email").style.boxShadow = '0px 1px 0px 0px red';
                    document.getElementById("validation-email").innerText = ("E-mail não registrado.")
                }
            } else {
                document.getElementById("email").style.boxShadow = '0px 1px 0px 0px red';
                document.getElementById("validation-email").innerText = ("E-mail não registrado.")
            }

            if (verifyUser === true) {
                localStorage.setItem('logedUser', nameUser);
                window.location.href = '/home'
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