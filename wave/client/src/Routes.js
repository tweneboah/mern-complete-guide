import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home'
import Layout from './hoc/layout'
import RegisterLogin from  './Components/Register_Login';
import Register from './Components/Register_Login/Register';
import UserDashboard from './Components/User-Dashboard/index'
import Auth from './hoc/auth';
import Shop from './Components/Shop'


const Routes = (props) => {
    return (
        <Layout> 
            <Switch>

               <Route  exact  path ='/user/dashboard' component ={Auth(UserDashboard, true)}/>  
            
            
               <Route  exact  path ='/register_login' component ={ Auth(RegisterLogin, false)}/>
               <Route  exact  path ='/register' component ={ Auth(Register, false)}/>
               <Route  exact  path ='/' component ={Auth(Home, null)}/>
               <Route  exact  path ='/shop' component ={Auth(Shop, null)}/>

            </Switch>
        </Layout>
       
        
    );
};

export default Routes; 