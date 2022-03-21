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

router.get('/', (response) =>{
    try {
        response.json(signUpTemplateCopy.find());
      } catch (error) {
        response.json({ message: error });
      }
})

router.get('/:userId', async (req, res) => {
    try {
      res.json(await signUpTemplateCopy.findById(req.params.userId));
    } catch (error) {
      res.json({ message: error });
    }
  });
module.exports = router