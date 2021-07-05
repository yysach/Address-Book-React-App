export const FormValidate=(form)=>{
    let username =form.username
    let email = form.email
    let password = form.password
    let cpassword = form.cpassword

    let usernameId = document.getElementById("Username")
    let emailId = document.getElementById("Email")
    let passwordId = document.getElementById("Password")
    let cpasswordId = document.getElementById("ConfirmPassword")

    let username_msg = document.getElementById("username_msg")
    let email_msg = document.getElementById("email_msg")
    let pwd_msg = document.getElementById("pwd_msg")
    let cpwd_msg = document.getElementById("cpwd_msg")


    if(username.length<4){
        usernameId.classList.remove("is-valid")
        usernameId.classList.add("is-invalid")
        username_msg.innerHTML="username should be at least 4 character long !!"
        return false;
    }else{
        usernameId.classList.remove("is-invalid")
        usernameId.classList.add("is-valid")
    }



    if(email===""||email===undefined||email==null){
        emailId.classList.remove("is-valid")
        emailId.classList.add("is-invalid")
        email_msg.innerHTML="email can not null !!"
        return false;
    }else{
        emailId.classList.remove("is-invalid")
        emailId.classList.add("is-valid")
    }

    if(password.length<4){
        passwordId.classList.remove("is-valid")
        passwordId.classList.add("is-invalid")
        pwd_msg.innerHTML="password should be at least 4 character long !!"
        return false;
    }else{
        passwordId.classList.remove("is-invalid")
        passwordId.classList.add("is-valid")
    }


    if(cpassword!==password){
        cpasswordId.classList.remove("is-valid")
        cpasswordId.classList.add("is-invalid")
        cpwd_msg.innerHTML="Password doesn't matched !!"
        return false;
    }
    else{
        cpasswordId.classList.remove("is-invalid")
        cpasswordId.classList.add("is-valid")
    }
    return true;

}
