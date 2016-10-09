import express, { Router } from 'express'

import {
  accountLogin,
  accountCreate
} from './routes/authentication'

const router = Router()

router.post('/account/login', accountLogin)
router.post('/account/create', accountCreate)


module.exports = router;
