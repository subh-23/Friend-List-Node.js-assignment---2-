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
    } catch (error) {
        //500= some error occurs with our database, nothing with API
        res.status(500).json(error)
    }
})


//to get a single friend
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const oneFriend = await Friend.findById(id)
    try {
        if (oneFriend == null) {
            res.status(404).json({ message: "Cannot find subscriber" })
        }
        else {
            res.status(200).json(oneFriend)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
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
        res.status(201).json({ message: "User added successfully" })
    } catch (error) {
        // 400== if user gave us a bad data
        res.status(400).json({ message: error.message })
    }
})



module.exports = router