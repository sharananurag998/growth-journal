const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));
})

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    console.log(username);
    const newUser = new User({username});
    newUser.password = newUser.generateHash(req.body.password);
    newUser.save()
    .then(()=> res.json('User added'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/login').post((req, res) => {
    User.findOne({username: req.body.username}, function(err, user) {
        if (!user.validPassword(req.body.password)) {
          res.status(400).json('Error: Password incorrect');
        } else {
          res.status(200).json('Success: User authenticated!');
        }
      });
})

module.exports = router;