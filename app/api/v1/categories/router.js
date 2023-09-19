const express = require('express')
const router = express()
const { index, create, find, update, destory } = require('./controller')

router.get('/categories', index)
router.post('/categories', create)
router.get('/categories/:id', find)
router.put('/categories/:id', update)
router.delete('/categories/:id', destory)

module.exports = router

