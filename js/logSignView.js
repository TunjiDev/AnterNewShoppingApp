class logSignView{
    btnLogIn = document.querySelector('.signinBtn')
    btnSignUp= document.querySelector('.registerBtn')
    signUpDiv = document.querySelector('#signUp');
    loginInDiv = document.querySelector('#logInBtn');

    addLogin(handler){
        this.btnLogIn.addEventListener('click', handler)
    }
    addSignUp(handler){
        this.btnSignUp.addEventListener('click', handler)
    }
    displaySignUpForm(handler) {
        this.signUpDiv.addEventListener('click', handler);
    }
    displayLogInForm(handler) {
        this.loginInDiv.addEventListener('click', handler);
    }
}
export default new logSignView()