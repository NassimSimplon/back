const EXPERIENCE = require('../models/experience');
const router = require('express').Router();

//@GET ALL EXPERIENCE
router.get('/experiences',async(req,res)=>{
    const experience = await EXPERIENCE.find();

    // return response with posts, total pages, and current page
    return res.json(experience);
    


})

//@UPDATE EXPERIENCE
router.put('/experiences/update/:id',async(req,res)=>{
 
    const experience = await EXPERIENCE.findByIdAndUpdate(req.params.id, req.body,{new:true}).then((result)=>{
       res.status(200).json({
        message:"Update EXPERIENCE Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed update EXPERIENCE : ${err}`)
    })
   return res.json(experience);

})

//@DELTE EXPERIENCE
router.delete('/experiences/delete/:id',async(req,res)=>{
      
    const experience = await EXPERIENCE.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(200).json({
        message:"Delete EXPERIENCE Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed To Delete EXPERIENCE : ${err}`)
    })
   return res.json(experience);

})

//@POST EXPERIENCE
router.post('/experiences/add',async(req,res)=>{
      const {title,description,date,company,companyIcon} = req.body
  const experience = await new EXPERIENCE({
    title,description,date,company,companyIcon
  })
  
let result =  await  experience.save().then((result)=>{
    res.status(200).json({
      message:"Add EXPERIENCE Successfuly !!",
      data: result
     });
  }).catch((err)=>{
      res.status(400)
      console.log(`Failed To Add EXPERIENCE : ${err}`)
  })
 return res.json(result);

})



module.exports  = router