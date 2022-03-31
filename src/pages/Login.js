import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './login.css';






function Login() {
	const initialValues = { username: "", email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
  
	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setFormValues({ ...formValues, [name]: value });
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  setFormErrors(validate(formValues));
	  setIsSubmit(true);
	};
  
	useEffect(() => {
	  console.log(formErrors);
	  if (Object.keys(formErrors).length === 0 && isSubmit) {
		console.log(formValues);
	  }
	}, [formErrors]);
	const validate = (values) => {
	  const errors = {};
	  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	  
	  if (!values.email) {
		errors.email = "Email is required!";
	  } else if (!regex.test(values.email)) {
		errors.email = "This is not a valid email format!";
	  }
	  if (!values.password) {
		errors.password = "Password is required";
	  } else if (values.password.length < 4) {
		errors.password = "Password must be more than 4 characters";
	  } else if (values.password.length > 10) {
		errors.password = "Password cannot exceed more than 10 characters";
	  }
	  return errors;
	};
  
	return (

	  <div className="container">
	
	<body className="zt">
		<form onSubmit={handleSubmit}>
		  
		  <div className="login-wrap">
		  <div className="login-html">
			 
		  <h1 className="hw1">Login Form</h1>

			<p>{formErrors.username}</p>
			<div className="group"><br/>
			  <label className="l1">Email        </label>&nbsp;&nbsp;
			  <input type="text" class="label" name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
			</div>
			<p>{formErrors.email}</p>
			<br/><div className="group">
			  <label className="l1">Password    </label>&nbsp;&nbsp;
			  <input type="password" class="label" name="password" placeholder="Password" value={formValues.password} onChange={handleChange} />
			</div>
			<p>{formErrors.password}</p>
			<div className="group">
			<button className="button">Submit</button></div><br/> 
			<div className="foot-lnk">
					<a href="#forgot" className="foot"> Forgot Password?</a>
				</div>
		  </div></div><br/>
		</form></body>
	  </div>
	);
  }
  
  export default Login;
  