import React from 'react';
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import Feed from './screens/Feed'
import Friendreq from './screens/Friendreq'
import Suggestions from './screens/Suggestions'
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={Signin}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/feed' component={Feed}/>
            <Route exact path='/friendreq' component={Friendreq}/>
            <Route exact path='/suggestions' component={Suggestions}/>  
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
