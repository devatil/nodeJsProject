import express from 'express'
import * as pageControler from '../controllers/pageControler.js'

const router = express.Router()

router.route('/').get(pageControler.getIndexPage)

router.route('/about').get(pageControler.getAboutPage)

export default router