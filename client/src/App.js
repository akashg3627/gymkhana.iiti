import './App.css';
import {useState} from 'react';
import GoogleLogin from 'react-google-login';
// import InsideLogin from './insideLogin';

function App() {

const[name,setName] =useState("");
const[email,setEmail] =useState("");
const[url,setUrl] =useState("");

const responseGoogle = response =>{
   setName(response.profileObj.name);
   setEmail(response.profileObj.email);
   setUrl(response.profileObj.imageUrl);
  }

  return (
    <div className="App">
      <h1>hello user</h1>
      <h2>name: {name}</h2>
      <h2>email: {email}</h2>
      <img src={url} alt={name} />
      <GoogleLogin
    clientId=" "
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
