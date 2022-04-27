import { Router } from "express";
const router = Router()
import {getUsers, createUsers, updateUsers, deleteUsers, getUserById} from '../controllers/USersController.js'

router.get("/users", getUsers)
router.post("/users", createUsers)
router.put("/users/:id", updateUsers)
router.delete("/users/:id", deleteUsers)
router.get("/users/:id", getUserById)


export default router