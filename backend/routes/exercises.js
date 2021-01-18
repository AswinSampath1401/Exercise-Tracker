const router = require('express').Router();
const Exercise = require('../models/exercise.model');
const { route } = require('./users');

// Display all exercises
router.route('/').get((req,res)=>{

    Exercise.find()
        .then((exercises) => res.json(exercises)) // List all exercises
        .catch((err)=>res.json(err.message)); // If err throw err
});

// Add an Exercise
router.route('/add').post((req,res)=>{

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number.parseInt(req.body.duration);
    const date = Date.parse(req.body.date);

    const exercise = new Exercise({
        username : username,
        description : description,
        duration : duration,
        date : date
    });

    exercise.save()
        .then(()=> res.json('Exercise log added'))
        .catch((err)=> res.json(err.message));

});

// Display an exercise before updating
router.route('/:id').get((req,res)=>{

    Exercise.findById(req.params.id)
        .then((exercise)=> res.json(exercise))
        .catch((err)=> res.json('Err'+ err));
});

// Delete a particular exercise
router.route('/:id').delete((req,res)=>{

    Exercise.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Exercise deleted'))
        .catch((err)=> res.json(err));
});

// Updating a particular exercise
router.route('/update/:id').put((req,res)=>{

    Exercise.findById(req.params.id)
        .then((exercise)=>{
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number.parseInt(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(()=>res.json('Exercise updated'))
                .catch((err)=> res.json(err));
        });
});

module.exports = router;