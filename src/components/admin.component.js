import React, { useState } from 'react';
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import '../styles/adminLogin.css';




function Admin(){
    return <div>
       
        <body className="bodyb">

       
    <style type="text/css" >
        { `.navlink {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar1 {display:none}` }
    </style>
    
    
    <MainContainer>

    <WelcomeText>Admin Login</WelcomeText>
  
  <InputContainer>
          <Input type="text" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
  
        <ButtonContainer>
          <Button content="Login" />
        </ButtonContainer>
    </MainContainer>
    ;

    
    </body>
      </div>;
}
      





const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vw;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(7px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #B8390E;
text-transform: uppercase;
letter-spacing: 0.3rem;
font-weight: bold;

`;


const WelcomeText = styled.h2`
margin: 3rem 0 2rem 0;
font-style: Verdana;
`;


const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 30%;
width: 200%;
`;

const ButtonContainer = styled.div`
margin: 5rem 0 2rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

`;







export default Admin;