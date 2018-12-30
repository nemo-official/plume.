import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div className="Form">
    <form>

<h1 className="title">Log in</h1>
 {/* Username Form */}
 <div className="username">
 <form>
   <fieldset>
     Username:<br />
     <input type="text" username="username"/>
   </fieldset>
 </form>
 </div>


{/* Password Form */}
<div className="password">
<form>
  <fieldset>
    Password:<br />
    <input type="password" password="password" />
    <br /> <br />
    <a href="" id="forgotMyPassword">Forgot My Password</a>
  </fieldset>
</form>
</div>

{/*Log in button*/}

<div className="login">
<button href="" className="login">Log In</button>
</div>

{/*Right side*/}
<div className="split right">
  <div className="centered">
    <img src={ require('./assets/images/logo.png') } />

  </div>
  <div className="centered" id="org">
  <img src={ require('./assets/images/org.png') } />
  </div>
  </div>

      </form>
      </div>


  )
}

export default Login;
