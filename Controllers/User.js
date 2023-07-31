const USER = require('../models/user');
const router = require('express').Router();

//@GET ALL USER
router.get('/user',async(req,res)=>{
    const user = await USER.find();

    // return response with posts, total pages, and current page
    return res.json(user);
    


})

//@UPDATE USER
router.put('/user/update/:id',async(req,res)=>{
 
    const user = await USER.findByIdAndUpdate(req.params.id, req.body,{new:true}).then((result)=>{
       res.status(200).json({
        message:"Update USER Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed update USER : ${err}`)
    })
   return res.json(user);

})

//@DELTE USER
router.delete('/user/delete/:id',async(req,res)=>{
      
    const user = await USER.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(200).json({
        message:"Delete USER Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed To Delete USER : ${err}`)
    })
   return res.json(user);

})

//@POST USER
router.post('/user/add',async(req,res)=>{
      const {fullName,email,password} = req.body
  const user = await new USER({
    fullName,email,password
  })
  
 let result = await  user.save().then((result)=>{
    res.status(200).json({
      message:"Add USER Successfuly !!",
      data: result
     });
  }).catch((err)=>{
      res.status(500)
      console.log(`Failed To Add USER : ${err}`)
  })
 return res.json(result);

})



module.exports  = router