const EDUCATION = require('../models/educations');
const router = require('express').Router();

//@GET ALL EDUCATION
router.get('/educations',async(req,res)=>{
    const education = await EDUCATION.find();

    // return response with posts, total pages, and current page
    return res.json(education);
    


})

//@UPDATE EDUCATION
router.put('/educations/update/:id',async(req,res)=>{
 
    const education = await EDUCATION.findByIdAndUpdate(req.params.id, req.body,{new:true}).then((result)=>{
       res.status(200).json({
        message:"Update EDUCATION Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed update EDUCATION : ${err}`)
    })
   return res.json(education);

})

//@DELTE EDUCATION
router.delete('/educations/delete/:id',async(req,res)=>{
      
    const education = await EDUCATION.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(200).json({
        message:"Delete EDUCATION Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed To Delete EDUCATION : ${err}`)
    })
   return res.json(education);

})

//@POST EDUCATION
router.post('/educations/add',async(req,res)=>{
      const {title,description,speciality,school,icon,date} = req.body
  const education = await new EDUCATION({
    title,description,speciality,school,icon,date
  })
  
let result =  await  education.save().then((result)=>{
    res.status(200).json({
      message:"Add EDUCATION Successfuly !!",
      data: result
     });
  }).catch((err)=>{
      res.status(400)
      console.log(`Failed To Add EDUCATION : ${err}`)
  })
 return res.json(result);

})



module.exports  = router