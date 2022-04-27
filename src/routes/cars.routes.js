import {Router} from 'express'
const router = Router()

import {getCars, createCars, updateCars, deleteCars, getCarsById} from '../controllers/CarsController.js'

router.get("/cars", getCars)
router.post("/cars", createCars)
router.put("/cars/:id", updateCars)
router.delete("/cars/:id", deleteCars)
router.get("/cars/:id", getCarsById)


export default router