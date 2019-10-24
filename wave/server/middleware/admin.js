
const isAdmin = (req, res, next) => {
   if(req.user.role === 0){
       return res.send('You are not allowed to create a brand')
   }
};

module.exports = isAdmin;