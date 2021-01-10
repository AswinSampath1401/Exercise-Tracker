const router = require('express').Router();
const Exercise = require('../models/exercise.model');


router.route('/').get( (req,res)=>{
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error ' + err))
} );

router.route('/add').post( (req,res)=>{

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number.parseInt(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username: username,
        description : description,
        duration : duration,
        date : date
    });

    newExercise.save()
        .then( () => res.json('Exercise added Sucessfully') )
        .catch(err => res.status(400).json('Error ' + err));
});

// Get(Show/Display)  a particular exercise
router.route('/:id').get( (req,res)=>{
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error ' + err));
} );

// Delete a particular exercise
router.route('/:id').delete( (req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Exercise Deleted Sucessfully'))
        .catch(err => res.status(400).json('Error ' + err));
} );

// Update a particular exercise
router.route('/:id').put( (req,res)=>{
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.duration = Number.parseInt(req.body.duration);
            exercise.description = req.body.description;
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(()=> res.json('Exercise Updated to new values'))
                .catch(err => res.status(400).json('Error '+ err));
        })
        .catch(err => res.status(400).json('Error ' + err));
} );

module.exports = router;