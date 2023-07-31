const CERTIFICATION = require('../models/certifications');
const router = require('express').Router();

//@GET ALL CERTIFICATION
router.get('/certifications',async(req,res)=>{
    const certification = await CERTIFICATION.find();

    // return response with posts, total pages, and current page
    return res.json(certification);
    


})

//@UPDATE CERTIFICATION
router.put('/certifications/update/:id',async(req,res)=>{
 
    const certification = await CERTIFICATION.findByIdAndUpdate(req.params.id, req.body,{new:true}).then((result)=>{
       res.status(200).json({
        message:"Update CERTIFICATION Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed update CERTIFICATION : ${err}`)
    })
   return res.json(certification);

})

//@DELTE CERTIFICATION
router.delete('/certifications/delete/:id',async(req,res)=>{
      
    const certification = await CERTIFICATION.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(200).json({
        message:"Delete CERTIFICATION Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed To Delete CERTIFICATION : ${err}`)
    })
   return res.json(certification);

})

//@POST CERTIFICATION
router.post('/certifications/add',async(req,res)=>{
      const {title,image,icon} = req.body
  const certification = await new CERTIFICATION({title,image,icon
  })
  
let result =  await  certification.save().then((result)=>{
    res.status(200).json({
      message:"Add CERTIFICATION Successfuly !!",
      data: result
     });
  }).catch((err)=>{
      res.status(400)
      console.log(`Failed To Add CERTIFICATION : ${err}`)
  })
 return res.json(result);

})



module.exports  = router