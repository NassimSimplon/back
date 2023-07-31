const VIEASSOCIATIVE = require('../models/vieAssociative');
const router = require('express').Router();

//@GET ALL VIEASSOCIATIVE
router.get('/vieAssociatives',async(req,res)=>{
    const vieAssociative = await VIEASSOCIATIVE.find();

    // return response with posts, total pages, and current page
    return res.json(vieAssociative);
    


})

//@UPDATE VIEASSOCIATIVE
router.put('/vieAssociatives/update/:id',async(req,res)=>{
 
    const vieAssociative = await VIEASSOCIATIVE.findByIdAndUpdate(req.params.id, req.body,{new:true}).then((result)=>{
       res.status(200).json({
        message:"Update VIEASSOCIATIVE Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed update VIEASSOCIATIVE : ${err}`)
    })
   return res.json(vieAssociative);

})

//@DELTE VIEASSOCIATIVE
router.delete('/vieAssociatives/delete/:id',async(req,res)=>{
      
    const vieAssociative = await VIEASSOCIATIVE.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(200).json({
        message:"Delete VIEASSOCIATIVE Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed To Delete VIEASSOCIATIVE : ${err}`)
    })
   return res.json(vieAssociative);

})

//@POST VIEASSOCIATIVE
router.post('/vieAssociatives/add',async(req,res)=>{
      const {title,image} = req.body
  const vieAssociative = await new VIEASSOCIATIVE({
    title,image
  })
  
 let result = await  vieAssociative.save().then((result)=>{
    res.status(200).json({
      message:"Add VIEASSOCIATIVE Successfuly !!",
      data: result
     });
  }).catch((err)=>{
      res.status(400)
      console.log(`Failed To Add VIEASSOCIATIVE : ${err}`)
  })
 return res.json(result);

})



module.exports  = router