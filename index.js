const express = require('express');
const app = express();
const cors = require("cors")
const db = require('./config/db');
app.use(express.json());
app.use(cors())
db();
const certification = require('./Controllers/Certifications')
app.use('/app',certification)
const education = require('./Controllers/Educations')
app.use('/app',education)
const experience = require('./Controllers/Experience')
app.use('/app',experience)
const project = require('./Controllers/Projects')
app.use('/app',project)
const skill = require('./Controllers/Skills')
app.use('/app',skill)
const user = require('./Controllers/User')
app.use('/app',user)
const vieAssociative = require('./Controllers/VieAssociative')
app.use('/app',vieAssociative)
const auth = require('./Controllers/Auth');
app.use('/auth',auth)
app.listen( 3000,()=>console.log("Serveur en marche"));



