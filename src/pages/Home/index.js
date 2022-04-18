import React from 'react'
import userVerify from '../../services/userVerify';
import './home.css'

function Home() {
    userVerify();
    const logedUser = localStorage.getItem('logedUser');

    function sair() {
        localStorage.removeItem('logedUser');
        window.location.href = './login';
    }

    return (
        <>
            <div className="home">
                <div id="container-home">
                    <div id="welcome">
                        <h2>Bem-Vindo(a) {logedUser} </h2>
                        <a href={'./'} onClick={sair}>logoff</a>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt='logo-devLopesRenato' />
                </div>
            </div>
        </>
    )

}

export default Home;