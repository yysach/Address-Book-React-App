export const FormValidate=(username,password)=>{

    let usernameId = document.getElementById("Username")
    let passwordId = document.getElementById("Password")

    let username_msg = document.getElementById("username_msg")
    let pwd_msg = document.getElementById("pwd_msg")

    if(username===""||username===undefined||username==null){
        usernameId.classList.remove("is-valid")
        usernameId.classList.add("is-valid")
        username_msg.innerHTML="username can not null !!"
        return false;
    }else if(password===""||password===undefined||password==null){
        passwordId.classList.remove("is-valid")
        passwordId.classList.add("is-invalid")
        pwd_msg.innerHTML="password can not null !!"
        return false;
    }
    return true;
}
