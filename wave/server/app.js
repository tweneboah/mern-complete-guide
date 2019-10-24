require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
  //models
const User = require('./models/User');
const Brand = require('./models/Brand');
const Wood = require('./models/Wood');
const Product = require('./models/Product');
 //Custom middleware
const auth = require('./middleware/auth');
const isAdmin = require('./middleware/admin');




//DB
const DB_URL = process.env.DB_LOCAL 
mongoose.connect( DB_URL)
  .then(() => console.log("DB Connected successfully.."));

  //MIDDLEWARE
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json())
  app.use(cookieParser());



  //ROUTE

  //PRODUCTS

  // BY ARRIVAL
// /articles?sortBy=createdAt&order=desc&limit=4

// BY SELL
// /articles?sortBy=sold&order=desc&limit=100&skip=5
app.get('/api/product/articles',(req,res)=>{

    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;
    Product.
    find().
    populate('brand').
    populate('wood').
    sort([[sortBy,order]]).
    limit(limit).
    exec((err,articles)=>{
        if(err) return res.status(400).send(err);
        res.send(articles)
    })
})


/// /api/product/article?id=HSHSHSKSK,JSJSJSJS,SDSDHHSHDS,JSJJSDJ&type=single

app.get('/api/product/articles_by_id', (req, res) => {
    let type = req.query.type;
    let items = req.query.id;

    if(type === 'array'){
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map((item) => {
            return mongoose.Types.ObjectId(item)
        })
    }

    Product.find({_id : {$in: items}}).
    populate('brand').
    populate('wood').
    exec((err, docs) => {
        return res.status(200).send(docs)
    })
})


//CREATE  PRODU

  app.post('/api/products/article', auth, (req, res) => {
      const product = new Product(req.body);
      product.save((err, doc) => {
          if(err) {
              return res.json({success: false, err})
          }else {
              res.status(200).json({
                  success: true,
                  product: doc
            })
          }
      })
  })


  //=========
  // WOODS
  //=======

  app.post('/api/product/wood', (req, res) => {
      const wood = new Wood(req.body);
      wood.save((err, doc) => {
          if(err){
              return res.json({success: false,})
          }else {
              return res.status(200).json({
                  success: true,
                  wood: doc
              })
          }
      })
  });


  app.get('/api/product/woods', (req, res) => {
      Wood.find({}, (err, woods) => {
          if(err){
              return res.status(400).send(err)
          }else {
              return res.status(200).send(woods)
          }
      })
  })

//=======
// BRANDS
//=======

app.post('/api/product/brand', auth, isAdmin, (req, res) => {
    const brand = new Brand(req.body);

    brand.save((err, doc) => {
        if(err){
            return res.status(400).json({
                error: err,
                success: false
            })
        }else {
            return res.status(200).json({
                brand: doc,
                success: true
            })
        }
    })
})

//GET ALL BRANDS
app.get('/api/product/brands', (req, res) => {
    Brand.find({}, (err, brands) => {
        if(err){
            return res.status(400).send(err)
        }else {
            return res.status(200).send(brands)
        }
    })
})

  //========
  // USERS
  //=======


  //AUTH

  app.get('/api/users/auth', auth, (req, res) => {
       res.status(200).json({
           //This helps us in react
          isAdmin: req.user.role === 0 ? false : true,
          isAuth: true,
          email: req.user.email,
          name: req.user.email,
          lastname: req.user.lastname,
          role: req.user.role,
          cart: req.user.cart,
          history: req.user.history
       })
  });



  //Register
 app.post('/api/users/register', (req, res) => {
     const user = new User(req.body);

     user.save((err, doc) => {
         if(err){
             return res.status(400).json({erro:err, success: false})
         }else {
             res.status(200).json({
                 success: true,
                 userData: doc
             })
         }
     })
 })

//Login

app.post('/api/users/login', (req, res) => {
    //1. find the email
    User.findOne({email: req.body.email}, (err, user) => {
        //Findone does not return error but undifined so we won't check for errors
        if(!user){
             res.json({
                 loginSuccess: false,
                 message: 'User with email does not found'
             })
        }else {
            //2. check the password on email
           //Compare the password; the login and the one on our database
           
           //Any methods on our models can be accessble the a copy of the user model

           user.comparePassword(req.body.password, (err, isMatch) => {
               if(!isMatch){
                   return res.json({
                       loginSuccess: false,
                       message: 'Wrong password'
                   })
               }else {
                   //Generate a token
                   user.generateToken((err, user) => {
                       if(err){
                           return res.status(400).send(err)
                       }else {
                           //Store the token as a cookie
                           res.cookie('w_auth', user.token).status(200).json({
                               loginSuccess: true
                           })
                       }
                   })
               }
           })
        }
    })
    
    //3. if password matches the email create a token
});


  //LOGOUT
  
app.get('/api/users/logout', auth, (req, res) => {
   //Getting the login user and update their values thus destroying the token and other properties

   User.findByIdAndUpdate({_id:req.user._id},
    
    //Destroying the token
   { token: ''}, (err, user) => {
       if(err){
           return res.json({
               success: false,
               error: err
           })
       }else {
           return res.json({
               success: true,
               message: 'You have logout successfully!!'
           })
       }
   })
})


app.get('/', (req, res) => {
    res.send('hii')
})


//SERVER
const PORT = process.env.PORT  || 5000;
app.listen(PORT, () => {
    console.log(`The server is runing on port ${PORT}`)
});


