import React from 'react';
import UserLayout from '../../hoc/user'
import MyButton from '../utils/button'

const UserDashboard = ({user}) => {
    return (
          <UserLayout>
              <div>
                  <div className= 'user_nfo_panel'>
                     <h1>User information</h1>
                     <div>
                         {user.userData ? (
                         <div>
                             <span>email : {user.userData.email}</span>
                             <span>name: {user.userData.name}</span>
                             <span>lastname: {user.userData.lastname}</span>
                             </div>
                         ) : (
                         <div>
                             Loading
                            </div>
                         )}
                        
                        
                         
                     </div>
                      {/* Button */}
                      <MyButton type='default'
                      title ='Edit account info'
                      linkTo='/user/user_profile'
                      />
                  </div>

                  <div className='user_nfo_panel'>
                      <h1>History purchases</h1>
                       <div className='user_product_block_wrapper'>
                           history
                       </div>
                  </div>
              </div>
          </UserLayout>
    );
};


export default UserDashboard;