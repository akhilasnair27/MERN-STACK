const express =require('express')
const router =express.Router()
const contact =require('../model/contactmodel')
const Contacts = require('../models/ContactModel')

router.get('all',async (requestAnimationFrame, res) =>) => {
    try{
        const Contacts = await Contacts.find()
        return res.status(200).json(Contacts)
    } catch (error) {
        return res.status(500).json({message: error.message})

    }
}

router.post('/add', async (req, res) => {
    try{
        const newcontact = new Contacts(req.body)
        const{name,phone} = newcontact
        if(!name || !phone) {
            return
        }
    }

}