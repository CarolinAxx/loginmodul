const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) =>{

    const User = new signUpTemplateCopy({
        name:request.body.name,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    User.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

// router.get('/signin')
module.exports = router