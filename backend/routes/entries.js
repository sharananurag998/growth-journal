const router = require('express').Router();
let Entries = require('../models/entries.model');

router.route('/').get((req, res)=>{
    Entries.find()
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json('Error: '+err));
})

router.route('/add').post((req, res)=>{ 
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    const tags = req.body.tags;
    const newEntry = new Entries({username, title, description, date, tags});
    newEntry.save()
        .then(()=> res.json('Entry added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;