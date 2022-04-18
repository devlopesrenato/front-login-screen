
const logedUser = localStorage.getItem('logedUser');

const userVerify = () => {

    if (logedUser === null) {
        alert("Você precisa fazer login primeiro.");
        window.location.href = './login';
    }
}

export default userVerify;