const express = require('express')
const router = express.Router()
const Friend = require("../models/friends")
var bodyParser = require('body-parser')



// const jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

//to get all friends
router.get('/', async (req, res) => {
    try {
        const allFriends = await Friend.find()
        res.json(allFriends)
        // res.render(index, { users: allFriends })
    } catch (error) {
        //500= some error occurs with our database, nothing with API
        res.status(500).json(error)
        // res.status(500).render(error)
    }
})


//to get a single friend
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const oneFriend = await Friend.findById(id)
    try {
        if (oneFriend == null) {
            res.status(404).json({ message: "Cannot find subscriber" })
            // res.status(404).send("Cannot find subscriber")
        }
        else {
            res.status(200).json(oneFriend)
            // res.status(200).render('index', { users: oneFriend })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
        // res.status(500).render(error)
    }
})

//to post friends
router.post('/', async (req, res) => {
    const addFriend = new Friend({
        name: req.body.name,
        nickname: req.body.nickname
    })
    try {
        await addFriend.save()
        res.status(201).json({message:"User added successfully"})
        // res.status(201).redirect('/')
    } catch (error) {
        // 400== if user gave us a bad data
        res.status(400).json({ message: error.message })
        // res.status(500).render(error)
    }
})



module.exports = router
