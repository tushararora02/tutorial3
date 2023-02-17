import React, {useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import './registrationcss.css'; 

function Profile(){

const location=useLocation();

const firstName=location.state.firstName;
const lastName=location.state.lastName;
const email=location.state.email;






return (
<div id="register" >
    <h2 style={{textAlign:"center"}}>Profile Page</h2>
    {/* <label className='label'>First Name:</label> */}
    <p className='label'><b>First Name:</b> {firstName}</p>
    <p className='label'><b>Last Name:</b> {lastName}</p>
    <p className='label'><b>Email:</b> {email}</p>

</div>


);

}


export default Profile;