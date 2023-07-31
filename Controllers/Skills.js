const SKILL = require('../models/skills');
const router = require('express').Router();

//@GET ALL SKILL
router.get('/skills',async(req,res)=>{
    const skill = await SKILL.find();

    // return response with posts, total pages, and current page
    return res.json(skill);
    


})

//@UPDATE SKILL
router.put('/skills/update/:id',async(req,res)=>{
 
    const skill = await SKILL.findByIdAndUpdate(req.params.id, req.body,{new:true}).then((result)=>{
       res.status(200).json({
        message:"Update SKILL Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed update SKILL : ${err}`)
    })
   return res.json(skill);

})

//@DELTE SKILL
router.delete('/skills/delete/:id',async(req,res)=>{
      
    const skill = await SKILL.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(200).json({
        message:"Delete SKILL Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed To Delete SKILL : ${err}`)
    })
   return res.json(skill);

})

//@POST SKILL
router.post('/skills/add',async(req,res)=>{
      const {title,icon} = req.body
  const skill = await new SKILL({
    title,icon
  })
  
let result =  await  skill.save().then((result)=>{
    res.status(200).json({
      message:"Add SKILL Successfuly !!",
      data: result
     });
  }).catch((err)=>{
      res.status(400)
      console.log(`Failed To Add SKILL : ${err}`)
  })
 return res.json(result);

})



module.exports  = router