import {Users} from '../models/Users.js'


export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll()
        console.log(users)
        res.json(users)
    }catch (err){
        return res.status(500).json({
            message: err.message
        })
    }

    
}

export const createUsers = async(req, res) => {
    const {name, cpf, email, senha, avatar, biografia} = req.body

    try {
        const newUser = await Users.create({
            name, 
            email,
            cpf, 
            senha, 
            avatar, 
            biografia, 
    
        })
        res.json(newUser)
    }catch (err){
        return res.status(500).json({
            message: err.message
        })
    }

    
}

