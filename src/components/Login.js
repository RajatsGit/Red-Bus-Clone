import React, { useEffect, useRef } from 'react'
import { Button, Container, Form  } from 'react-bootstrap'
import toast,{ Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const username = useRef();
   const password = useRef();
   const navigate = useNavigate();
   function login(){
     if(!username.current.value || !password.current.value){
        toast.error("Both fields are required");
     }else{
        localStorage.setItem("token");
        navigate('/')
     }
   }
   useEffect(() => {
    
   }, [])
   

  return (
  <>
  <Toaster/>
    <Container className="d-flex flex-column justify-content-center align-items-center"  style={{height:"100vh"}}>
        <h1>Login</h1>
            <Form.Control
            placeholder='username'
            ref={username}
            className='w-50 mt-4'
            aria-label='username'
            aria-aria-describedby='basic-addon1'
            />
            
            <Form.Control
            type='password'
            ref={password}
            className='w-50 mt-4'
            placeholder='password'
            aria-label='password'
            aria-aria-describedby='basic-addon1'
            />

          <Button variant='danger' className='mt-5 w-50' onClick={login}>
            Continue
          </Button>
    </Container>
    </>
  )
}

export default Login