const PROJECT = require('../models/projects');
const router = require('express').Router();

//@GET ALL PROJECT
router.get('/projects',async(req,res)=>{
    const project = await PROJECT.find();

    // return response with posts, total pages, and current page
    return res.json(project);
    


})

//@UPDATE PROJECT
router.put('/projects/update/:id',async(req,res)=>{
 
    const project = await PROJECT.findByIdAndUpdate(req.params.id, req.body,{new:true}).then((result)=>{
       res.status(200).json({
        message:"Update PROJECT Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed update PROJECT : ${err}`)
    })
   return res.json(project);

})

//@DELTE PROJECT
router.delete('/projects/delete/:id',async(req,res)=>{
      
    const project = await PROJECT.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(200).json({
        message:"Delete PROJECT Successfuly !!",
        data: result
       });
    }).catch((err)=>{
        res.status(400)
        console.log(`Failed To Delete PROJECT : ${err}`)
    })
   return res.json(project);

})

//@POST PROJECT
router.post('/projects/add',async(req,res)=>{
      const {title,description,image,video,github,url} = req.body
  const project = await new PROJECT({
    title,description,image,video,github,url
  })
  
 let result =  await  project.save().then((result)=>{
    res.status(200).json({
      message:"Add PROJECT Successfuly !!",
      data: result
     });
  }).catch((err)=>{
      res.status(400)
      console.log(`Failed To Add PROJECT : ${err}`)
  })
 return res.json(result);

})



module.exports  = router