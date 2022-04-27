import { Router } from "express";
const router = Router()
import {getUsers, createUsers} from '../controllers/listUSersController.js'

router.get("/users", getUsers)
router.post("/users", createUsers)
router.put("/users/:id")
router.delete("/users/:id")
router.get("/users/:id")


export default router