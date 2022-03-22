import React from "react";
import InputEmail from "../InputEmail";
import Button from "../Button";
import './passRecover.css'

const PassRecover = () => {
    const titleLogin = "<devLopesRenato />"


    return(
        <div className="field-recover">
            <h2 className="title-recover">{titleLogin}</h2>
            <div className="area-recover">
                <div id="validation-email"></div>
                <InputEmail className='input-Login' placeholder='E-mail' />  
                <div className="area-button">
                    <Button className='button buttonBlue'>Recuperar senha</Button>
                </div>
                <p>Voltar</p>
            </div>
        </div>

    )
}

export default PassRecover;