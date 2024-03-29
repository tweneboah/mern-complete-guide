import React, { Component } from 'react';
import {connect } from 'react-redux';
import FormField from '../utils/form/formField'
import { withRouter } from 'react-router-dom';
import { update, generateData, isFormValid } from '../utils/form/formAction';
import { registerUser } from '../../redux/actions/user-actions';
import {Dialog} from '@material-ui/core'

class Register extends Component {

    
    state = {
        formError: false,
        formSuccess: false,
        formdata:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true,
                  
                },
                valid: false,
                touched: false,
                validationMessage:''
            },

            lastname: {
                element: 'input',
                value: '',
                config:{
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                },
                validation:{
                    required: true,
                  
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },



            password: {
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },

            confirmPassword: {
                element: 'input',
                value: '',
                config:{
                    name: 'confirmPassword_input',
                    type: 'password',
                    placeholder: 'Confirm your password'
                },
                validation:{
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage:''
            }

        }
    }

    updateForm = (element) => {
        const newFormdata = update(element,this.state.formdata,'register');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }
    

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formdata,'register');
        let formIsValid = isFormValid(this.state.formdata,'register')

        if(formIsValid){
            console.log(dataToSubmit)
                this.props.dispatch(registerUser(dataToSubmit)).
                then((response) => {
                    if(response.payload.success){
                        this.setState({
                            formError: false,
                            formSuccess: true
                        })

                        //Redirect
                        setTimeout(() => {
                            this.props.history.push('/register_login')
                        }, 4000);
                    }else {
                        alert('BAD!!');
                        this.setState({
                            formError: true
                        })
                    }
                }).catch((e) => {
                    this.setState({
                        formError: true
                    })
                })
               
            } else {
            this.setState({
                formError: true
            })
        }
   

    }

    render() {
        return (
            <div className='page_wrapper'>
                <div className='container'>
                    <div className='register_login_container'>
                         <div className='left'>
                           <form onSubmit = {(event) => this.submitForm(event)}>
                               <h2>Personal infromation</h2>
                               <div className='form_block_two'>
                                 <div className ='block'>   
                                    <FormField
                                        id={'name'}
                                        formdata={this.state.formdata.name}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                 </div>

                                 <div className ='block'>   
                                    <FormField
                                        id={'lastname'}
                                        formdata={this.state.formdata.lastname}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                 </div>
                               </div>

                               <div>

                                <FormField
                                    id={'email'}
                                    formdata={this.state.formdata.email}
                                    change={(element)=> this.updateForm(element)}
                                />
                               </div>
                               <h2>Verify Password</h2>

                               <div className='form_block_two'>
                               <div className ='block'>   
                                    <FormField
                                        id={'password'}
                                        formdata={this.state.formdata.password}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                 </div>

                                 <div className ='block'>   
                                    <FormField
                                        id={'confirmPassword'}
                                        formdata={this.state.formdata.confirmPassword}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                 </div>
                               </div>

                               <div>
                               { this.state.formError ?
                        <div className="error_label">
                            Please check your data
                        </div>
                    :null}
                    <button onClick={(event)=> this.submitForm(event)}>
                       Create and Account
                    </button>
                               </div>
                           </form>

                         
                         </div>

                          <div className='right'>

                         </div>
                    </div>

                </div>
                {/* Dialog */}
                <Dialog open ={this.state.formSuccess}>
                    <div className='dialog_alert'>
                       <div>Congratulations!!</div>
                       <div>
                           You will be redirected very soon...
                       </div>
                    </div>

                </Dialog>
            </div>
        );
    }
}

export default connect() (withRouter( Register));