const express = require('express');
const router = express.Router();
const User = require('../schema/users');
const path = require('path')

// router.use(express.static(path.join(__dirname, 'public')))

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

// router.get('/', async (req, res) => {
//     try {
//         const reed = await User.find();
//         res.status(200).send(reed)
//     } catch (e) {
//         res.status(400).send(e.message)
//     }
// })


router.post('/', async (req, res) => {
    try {
        const data = new User({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
        });
        const create = await data.save();
        res.status(201).sendFile(path.join(__dirname, '../public/success.html'))
    } catch (err) {
        res.status(400).send(err.message)
    }

})


module.exports = router;
