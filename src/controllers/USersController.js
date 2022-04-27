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

export const getUserById = async (req, res) => {
    try{
        const {id} = req.params
        const user = await Users.findOne({
            where: {
                id
            }
        })
        if(!user) {
            return res.status(404).json({
                message: "USer not found..."
            })
        }
        res.json(user)
    }catch(error){
        return res.status(500).json({
            message: error.message
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

export const updateUsers = async(req, res) => {
    try {
        const {id} = req.params
        const {name, email, senha} = req.body

        const user = await Users.findByPk(id)
        user.name = name;
        user.email = email;
        user.senha = senha;

        await user.save()

        res.json(user)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}


export const deleteUsers = async(req, res) => {
    try {
        const {id} = req.params
        await Users.destroy({
            where: {
                id
            }
        })
        res.status(204)
    }catch (error) {
        return res.status(500).json({message: error.message})
    }
}