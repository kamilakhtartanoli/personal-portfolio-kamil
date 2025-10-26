const express = require('express')
const { contact } = require('../controller/contact.controller.js')

const router =  express.Router()
const app = express()

router.post('/contact',contact)

module.exports = {
    router
}