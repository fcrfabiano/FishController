const express = require('express')
const router = express.Router()
const controller = require("../controllers/controller")
const methodOverride = require('method-override')


router.use(methodOverride('_method'))

router.get('/', controller.allItems)


router.post('/newItem', express.urlencoded({extended:true}), controller.newItems)


module.exports = router