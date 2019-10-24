import React from 'react';
import MyButton from '../utils/button';
import Login from '../Register_Login/Login'

const RegisterLogin = (props) => {
    return (
        <div className='page_wrapper'>
            <div className='container'>
                 <div className ='register_login_container'>
                     <div className='left'>
                          <h1>New Customer</h1>
                          <p>

                    Elit non do adipisicing id adipisicing culpa. Tempor voluptate enim consectetur cillum tempor commodo est ad laboris occaecat exercitation. Non adipisicing irure fugiat quis amet. Reprehenderit et magna minim proident adipisicing laborum incididunt quis occaecat aliqua enim. In quis enim ex ullamco sit ea excepteur aliquip deserunt laborum.</p>

                    <MyButton
                     type = 'default'
                     title = 'Create an account'
                     linkTo = '/register_login'
                     addStyles = {{
                         margin: '10px 0 0 0'
                     }} 
                    />
                     </div>

                      <div className='right'>
                          <h2>Registered Customer</h2>
                          <p>If you an account Login here</p>

                         <Login/>
                     </div>
                 </div>
            </div>
        </div>
        
    );
};

export default RegisterLogin;