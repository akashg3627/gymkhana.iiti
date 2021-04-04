import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router';
// import InsideLogin from './InsideLogin';

function Login() {

const[name,setName] =useState("");
const[email,setEmail] =useState("");
const[url,setUrl] =useState("");

const responseGoogle = response =>{
   setName(response.profileObj.name);
   setEmail(response.profileObj.email);
   setUrl(response.profileObj.imageUrl);
   return(
       <Redirect to='http://localhost:3000/insideLogin' />
       
   )   
  }

  return (
    <div >
      
      <GoogleLogin
    clientId="80190158584-l7a1ffrde2orbl85kn0cpos7gp637l45.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default Login;
