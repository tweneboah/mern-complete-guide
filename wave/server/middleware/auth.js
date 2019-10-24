const User = require('./../models/User');

const auth = (req, res, next) => {
   
    //Retrive the token
    //Anytime we make request we pass the token
    let token = req.cookies.w_auth;

    //Check if the token is ok
    User.findByToken(token, (err, user) => {
       if(err){
           throw err
       } else if(!user){
          return res.json({
              isAuth: false,
              error: true
          })
       }else {
           //Pushing the token to the request object
           req.token = token;
           //Push the foud user with the token to the request object
           req.user = user;
           next()
       }
    })
};

module.exports = auth;