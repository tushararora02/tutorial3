import React, {useEffect,useState} from 'react';
import './registrationcss.css'; 
import {useNavigate} from 'react-router-dom';

function Registration(){


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    
    const EMPTY_FIELD = "Field cannot be empty!";
    const ALPHABET_ONLY = "Field can contain only alphabets!"
    const EMAIL_ERROR="Email is not valid!"
    const NO_ERROR = "";
    const ALPHABET_REGEX = /^[a-zA-Z]+$/;
    const EMAIL_REGEX=/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    const PASSWORD_REGEX=/^[A-Za-z0-9\d@$!%*#?&]{8,}$/;
    const PASSWORD_ERROR="Password should be alphanumeric and should be of minimum 8 charaters"
    const CONFIRMPASSWORD_ERROR="Password and confirm password should be same"

    const [errorMessageforFirstName, setErrorMessageForFirstName] = useState();
    const [errorMessageforLastName, setErrorMessageforLastName] = useState();
    const [errorMessageforEmail, setErrorMessageforEmail] = useState();
    const [errorMessageforPassword, setErrorMessageforPassword] = useState();
    const [errorMessageforConfirmPassword, setErrorMessageforConfirmPassword] = useState();
   
    const navigate=useNavigate()
  

    const changesInputValues=(e)=>{

        const label=e.target.name;
        const value=e.target.value;
        
        if(label === "firstName"){
            if(value){
                ALPHABET_REGEX.test(value) ? setErrorMessageForFirstName(NO_ERROR) : setErrorMessageForFirstName(ALPHABET_ONLY);
            }
            else{

                setErrorMessageForFirstName(EMPTY_FIELD);

            }

            setFirstName(value);
        }


        if(label === "lastName"){

            if(value){
                ALPHABET_REGEX.test(value) ? setErrorMessageforLastName(NO_ERROR) : setErrorMessageforLastName(ALPHABET_ONLY);
            }
            else{

                setErrorMessageforLastName(EMPTY_FIELD);

            }

            setLastName(value);
        }

        if(label === "email"){

            if(value){
                EMAIL_REGEX.test(value) ? setErrorMessageforEmail(NO_ERROR) : setErrorMessageforEmail(EMAIL_ERROR);

            }
            else{

                setErrorMessageforEmail(EMPTY_FIELD);

            }
            setEmail(value);
        }

        if(label === "password"){
            if(value){
                PASSWORD_REGEX.test(value) ? setErrorMessageforPassword(NO_ERROR) : setErrorMessageforPassword(PASSWORD_ERROR);
            }
            else{
                setErrorMessageforPassword(EMPTY_FIELD);
            }


            setPassword(value);
        }

        if(label === "confirmpassword"){
            if(value)
            {
                if(value=== password)
                {
                    setErrorMessageforConfirmPassword(NO_ERROR)
                }
                else{
                    setErrorMessageforConfirmPassword(CONFIRMPASSWORD_ERROR)

                }
            }
            else{
                setErrorMessageforConfirmPassword(EMPTY_FIELD)
            }

            setConfirmPassword(value);
        }

      
    }
 
    const submit=(e)=>{
        e.preventDefault();
       
        navigate("/profile",{state:{
            firstName: firstName,
            lastName:lastName,
            email:email
        
        }})
      

    }

    // const disable=()=>{

    //     if (errorMessageforConfirmPassword && errorMessageforEmail && errorMessageforLastName && errorMessageforFirstName)
    //     {
    //         setdisable_value(true) 
    //     }
    //     else{
    //         setdisable_value(false)
    //     }
    //     console.log(disable_value)

    // }



 



    return(
        <div  id="register">
        <h2 style={{textAlign:"center"}}>Register User</h2>
        <label className="label">First Name: </label>
        <input type="text" name="firstName" value={firstName} onChange={changesInputValues}/><br>
        </br>
        <p style={{color:"Red",textAlign:"center"}}>
                    {errorMessageforFirstName}
        </p>

        <label className="label">Last Name: </label>
        <input  type="text" name="lastName"  value={lastName} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center"}}>
                    {errorMessageforLastName}
        </p>


        <label className="label">Email: </label>
        <input type="text" name="email"  value={email} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center"}}>
                    {errorMessageforEmail}
        </p>

        <label className="label">Password: </label>
        <input type="password" name="password"  value={password} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center"}}>
                    {errorMessageforPassword}
        </p>

        <label className="label">Confirm Password: </label>
        <input type="password" name="confirmpassword"  value={confirmPassword} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center"}}>
                    {errorMessageforConfirmPassword}
        </p>
        
    
        <button disabled={errorMessageforConfirmPassword || errorMessageforEmail || errorMessageforLastName || errorMessageforFirstName} className="button" onClick={submit}>Submit</button>
    </div>

       
    )



}

export default Registration;