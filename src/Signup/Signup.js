import React from 'react'
import './Signup.css';

const Signup = () => {
  return (
    <div className="Form">
    <form>

<h1 className="title">Create an Account.</h1>
 {/* Name Form */}
 <div className="name">
 <form>
   <fieldset>
     Full Name:<br />
     <input type="text" fullName="fullName"/>
   </fieldset>
 </form>
 </div>

 {/* Email Form */}
 <div className="email">
 <form>
   <fieldset>
     Email Address:<br />
     <input type="text" email="email"/>
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
  </fieldset>
</form>
</div>

{/*Log in button*/}

<div className="next">
<button href="" className="login">Next</button>
</div>

{/*Right side*/}
<div className="split right">
  <div className="centered">
    <img src={ require('./assets/images/logo.png') } />

  </div>
  <div className="centered" id="di">
  <img src={ require('./assets/images/doit.png') } />
  </div>
  </div>

      </form>
      </div>


  )
}

export default Signup;
