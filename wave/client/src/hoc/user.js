import React from 'react';
import {Link} from 'react-router-dom';
import { generateData } from '../Components/utils/form/formAction';


const links = [
    {
        name: 'My account',
        linkTo: '/user/dashboard'
    },
    {
        name: 'My information',
        linkTo:'/user/user_profile'
    },
    {
        name: 'My Cart',
        linkTo:  '/user/cart'
    }
]


const UserLayout = (props) => {
    //Anytime you want to display a private route you have to display this userlayout component
    //GenerateLinks
     //return jsx so don't use parenthesis
    const generateLinks = () => (
       
        links.map((item, i) => (
           <Link to = {item.linkTo} key={i}>
               {item.name}
           </Link> 
        ))
    )


    return (
        <div className='container'>
           <div className='user_container'>
               <div className='user_left_nav'>
                 <h2>My Account</h2>
                  <div className='links'>
                     {generateLinks(links)}
                  </div>
               </div>

                <div className='user_right_nav'>
                  {props.children}
                  
               </div>

           </div>
        </div>
    
    );
};

export default UserLayout;