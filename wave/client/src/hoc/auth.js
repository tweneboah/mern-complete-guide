import React, { Component } from 'react';
import {connect} from 'react-redux';
import {auth } from '../redux/actions/user-actions';
import {CircularProgress } from '@material-ui/core' 
import axios from 'axios';

//Function that returns a class component
//This takes some aruments thus the component you want to render if everythingg goes ok, other arguments is what we will use to check agains the componet we want to render

//The component argument must start with a upper case if not it won't work because components are always in upperCase


export default function(ComposedClass, reload, adminRoute=null){
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        }

        componentDidMount(){

            //Do authentication stuffs here
            this.props.dispatch(auth()).then((response) => {
                //Assign the props to a variable, because at this point our action has finished making the request
                let user = this.props.user.userData
                //Check if a user is authenticated

                //If a user is not authenticated and the route he/she is trying to visit has second argument which has a true boolean value then redirect the user to login
                
               
                
                 if(!user.isAuth){
                  //if a user is not authenticated but trying to visit a private route then redirect, because this component has a second argument which has a boolean of true

                /**
                 *  <Route  exact  path ='/user/dashboard' component ={Auth(UserDashboard, true)}/>  
                 <Route  exact  path ='/' component ={Auth(Home, null)}/>

                 <Route  exact  path ='/register_login' component ={ Auth(RegisterLogin, false)}/>

                 <Route  exact  path ='/register' component ={ Auth(Register, false)}/>
                 * 
                 *  */  
                    if(reload){
                        //reload which has a boolean of true represent the dashboard component
                        this.props.history.push('/register_login');
                    }
                 }else {
                    //STAGE 2: //If a user is  authenticated 
                    //Here our main reason is that if a user is authenticated and trying to visit register and login we should send the client back to dashboard because register and login component has the same value which is false a secon argument

                    //If a user is authenticated but not an admin send him to dashboard
                    if(adminRoute && !user.isAdmin){
                        this.props.history.push('/user/dashboard')
                    }else{
                        if(reload === false){
                            this.props.history.push('/user/dashboard')
                        }
                    }
                   
                 }

            });


            this.setState({
                loading: false
            })
        }

        render() {

            //console.log(this.props)
            //We will do all our checks before returning the component

            if(this.state.loading){
                return (
                    <div className='main_loader'>
                        <CircularProgress style={{color: 'red'}} thickness={10}/>
                    </div>
                )
            }else{
                return (
                    //Note whatever you placed it here represent the componet it's rendering

                    //Now the question is how to protect the component not to render

                    //To do that we have to pass the data from backend through redux to it as props

                    // So we have to make request to the backend to get the auth user

                    //Note this HOC add more functions to the componet it's rendering
                    <ComposedClass {...this.props} user={this.props.user}/>   
                );
            }
            }

    }
    //mapstateTopROPS
    const mapstateToProps = (state) => {
        return {
            user: state.user
        }
    }

    //We have to return this AuthenticationCheck
    return connect(mapstateToProps)(AuthenticationCheck)
}

