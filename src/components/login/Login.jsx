import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [focusedEmail ,setEmailFocused] = useState(false);
    const [focusedPass ,setPassFocused] = useState(false);
    const [focusedConPass ,setConPassFocused] = useState(false);
    const [focusedName ,setNameFocused] = useState(false);
    const [focusedPhone ,setPhoneFocused] = useState(false);
 
    
    const handleFocusEmail =() =>{
        setEmailFocused(true);
    }
    const handleFocusPass =() =>{
        setPassFocused(true);
    }
    const handleFocusConPass =() =>{
        setConPassFocused(true);
    }
    const handleFocusName =() =>{
        setNameFocused(true);
    }
    const handleFocusPhone =() =>{
        setPhoneFocused(true);
    }
    const confirmPass = () => {
        var pass = document.getElementById("password").value;
        var c_pass = document.getElementById("confirm_password").value;
        console.log(pass);
        console.log(c_pass);
        if(pass !== c_pass){
            document.getElementById("con").style.display ="block";
        }else{
            document.getElementById("con").style.display ="none";
        }
    }
    const handleSubmit = (e) => { 
        var c = document.getElementById("check");
        var em = document.getElementById("email").value;
        var p = document.getElementById("password");
        var cp = document.getElementById("confirm_password");
        var nm = document.getElementById("name");
        var pone = document.getElementById("phone");
        if(!c.checked){
            document.getElementById("c").style.display ="block";
        }else{
            document.getElementById("c").style.display ="none";
        }
        e.preventDefault();
        if (em !== "" && p !== "" && cp !== "" && nm !=="" && pone !=="" ) {
            if (c.checked) {
                navigate("/response");
            }else{
                document.getElementById("c").focus();
                document.getElementById("c").style.display ="block";
            }
            
        }else{
            document.getElementById("error").style.display ="block";
            setTimeout(() =>{
                document.getElementById("error").style.display ="none";
            },2000);
            
        }
        
    }

    return (
        <>
            <div className="login">
                <div className="login__wrapper">
                    <div className="login__left">
                        <div className="login__details">
                            <h3 className="login__heading">
                                Choose a date range
                            </h3>
                            <p className="login__desc login--changeDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, possimus!</p>
                        </div>
                    </div>
                    <div className="login__right">
                        <div className="login__form">
                            <h3 className="login__title">Create an account</h3>
                            <form >
                                <p className="login__errorMessage" id ="error">Please completely fill the Form</p>
                                <div className="login__inputGroup">
                                    <label htmlFor="email" className="login__label">Your email address</label>
                                    <input type="email" name="email" id="email" aria-describedby="email" className="login__input" required  onBlur={handleFocusEmail} focused={ focusedEmail.toString()}/>
                                    <span  id ="emailError" className="login__error">Please fill a valid email</span>
                                </div>
                                <div className="login__inputGroup">
                                    <label htmlFor="password" className="login__label">Your password</label>
                                    <input type="password" name="password" id="password" className="login__input" required  pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,20}$" onBlur={handleFocusPass} focused={ focusedPass.toString()}/>
                                    <span id ="pass" className="login__error">
                                        Password must be 8-20 characters and should contain atleast 1 number, alphabet, special 
                                        character.
                                    
                                    </span>
                                </div>
                                <div className="login__inputGroup">
                                    <label htmlFor="confirm password" className="login__label">Confirm password</label>
                                    <input type="password" name="confirm password" id="confirm_password" onKeyUp={confirmPass} className="login__input" required  onBlur={handleFocusConPass} focused={ focusedConPass.toString()}/>
                                    <span id="con" className="login__error">Password Does Not Match</span>
                                </div>
                                <div className="login__inputGroup">
                                    <label htmlFor="name" className="login__label">Your full name</label>
                                    <input type="text" name="name" id="name" className="login__input" required pattern="^[a-zA-Z\s]*$" onBlur={handleFocusName} focused={ focusedName.toString()}/>
                                    <span id="nameError" className="login__error">Only letters are allowed</span>
                                </div>
                                <div className="login__inputGroup">
                                    <label htmlFor="mobile" className="login__label">Your phone number</label>
                                    <input type="text" name="mobile" id="mobile" className="login__input login--input" required pattern="^[0-9]{10,10}$"  onBlur={handleFocusPhone} focused={ focusedPhone.toString()}/>
                                    <span id="phone" className="login__error">Only ten digits number is allowed </span>
                                </div>
                                <div className="login__inputGroup login--checkbox">
                                    <input type="checkbox" name="checkbox" id="check" className="login__check" required  />
                                    <label htmlFor="check" className="login__label login--label">I read and agree Terms and Conditions</label>
                                    <span id="c" className="login__error">Please accept the terms and conditions</span>
                                </div>
                                <div className="login__inputGroup">
                                   <button  type="submit" className="login__button" id="submitBtn" onClick={handleSubmit}>Create account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login