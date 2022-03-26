import React from "react";
import { Link } from "react-router-dom";
import './login.css';





class Login extends React.Component {
  render() {
    return (
      <div>

        <div>
          <head>
            <title>Rent4U Car Rental System</title>
          </head>
        </div>
        <body className=" body1">

			<br/><br/><br/>
         
        <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"></label>
		<div class="login-form">
			<div class="sign-in-htm"><br/>
				<div class="group"><br/>
					<label for="user" class="label"><b>Username</b></label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label"><b>Password</b></label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				
				<div class="group">
					<input type="submit" class="button" value="Sign In"/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			
				
				
				
				
				<div class="hr"></div>
				
			
		</div>
	</div>
</div><br/><br/><br/><br/>





        </body>
      </div>

    );
  }
}

export default Login;