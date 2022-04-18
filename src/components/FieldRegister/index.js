import React from "react";
import Button from "../Button";
import InputEmail from "../InputEmail";
import InputPass from "../InputPass";
import { Link } from 'react-router-dom'
import './fieldRegister.css'
import InputName from "../InputName";



const FieldRegister = () => {
    const titleLogin = "<Cadastrar />"

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
        var passTwo = document.getElementById('pass-two')["value"];
        if (pass === "") {
            document.getElementById("pass").style.boxShadow = '0px 1px 0px 0px red';
            document.getElementById("pass-two").style.boxShadow = '0px 1px 0px 0px red';
            document.getElementById("validation-pass").innerText = ("Digite sua senha.")
            return false;
        } else if (pass !== passTwo) {
            document.getElementById("pass").style.boxShadow = '0px 1px 0px 0px red';
            document.getElementById("pass-two").style.boxShadow = '0px 1px 0px 0px red';
            document.getElementById("validation-pass").innerText = ("Senhas não conferem.")
        } else {
            cleanValidPass();
            return true;
        }
    }
    const validName = () => {
        var name = document.getElementById('name')["value"];
        if (name === "") {
            document.getElementById("name").style.boxShadow = '0px 1px 0px 0px red';
            document.getElementById("validation-name").innerText = ("Digite seu nome.")
            return false;
        } else {
            cleanValidName();
            return true;
        }
    }
    const cleanValidEmail = () => {
        document.getElementById("email").style.boxShadow = 'none';
        document.getElementById("validation-email").innerText = (" ")
    }
    const cleanValidPass = () => {
        document.getElementById("pass").style.boxShadow = 'none';
        document.getElementById("pass-two").style.boxShadow = 'none';
        document.getElementById("validation-pass").innerText = (" ")
    }
    const cleanValidName = () => {
        document.getElementById("name").style.boxShadow = 'none';
        document.getElementById("validation-name").innerText = (" ")
    }

    const cadastrar = () => {
        validEmail();
        validPass();
        validName();
        if (validEmail() === true && validPass() === true) {
            const email = document.getElementById('email')["value"],
            pass = document.getElementById('pass')["value"],
            name = document.getElementById('name')["value"];
            const lsKey = localStorage.length;
            var arr = [email, pass, name];
            localStorage.setItem(`regUser${lsKey}`, JSON.stringify(arr));
            alert(name + " cadastado!")
            window.location.href = '/login'
        } else if (validEmail() === "") {
            document.getElementById("email").style.boxShadow = '0px 1px 0px 0px red';
            document.getElementById("validation-email").innerText = ("Digite seu e-mail.")
        }
    }

    return (
        <>
            <div className="field-register">
                <h2 className="title-register">{titleLogin}</h2>
                <div className="area-login">
                    <InputName onClick={cleanValidName} className='input-register' placeholder='Nome completo' />
                    <div id="validation-name"></div>
                    <InputEmail className='input-register' placeholder='Seu e-mail' onBlur={validEmail} onFocus={cleanValidEmail} />
                    <div id="validation-email"></div>
                    <InputPass id="pass" className='input-register' placeholder='Sua senha' onFocus={cleanValidPass} onKeyUp={validPass} />
                    <InputPass id="pass-two" className='input-register' placeholder='Repita sua senha' onFocus={cleanValidPass} onKeyUp={validPass} />
                    <div id="validation-pass"></div>
                    <div className="area-button">
                        <Button className='button buttonBlue' onClick={cadastrar} >Cadastrar</Button>
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