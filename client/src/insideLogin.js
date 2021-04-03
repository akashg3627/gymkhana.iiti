import React from 'react';

function InsideLogin(props){

  return(
    <>
    <h1>hello user</h1>
    <h2>name: {props.name}</h2>
    <h2>email: {props.email}</h2>
    <h2>image: {props.image}</h2>
    </>
  );

}
export default InsideLogin;