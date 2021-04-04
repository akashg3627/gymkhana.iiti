import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Login from './Login';
import InsideLogin from './InsideLogin';

function Main(){
 return(
    <div>
        <h1>Main.js file</h1>
        <Switch>
            <Route path="/login"> <Login /> </Route>
            <Route exact path="/insideLogin"> <InsideLogin /> </Route>
        </Switch>
    </div>

 );
}


export default Main;