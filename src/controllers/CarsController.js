import {Cars} from '../models/Cars.js'


export const getCars = async(req, res) => {
    try {
        const cars = await Cars.findAll()
        res.json(cars)
    }catch (err){
        return res.status(500).json({
            message: err.message
        })
    }

    
}

export const getCarsById = async (req, res) => {
    try{
        const {id} = req.params
        const cars = await Cars.findOne({
            where: {
                id
            }
        })
        if(!cars) {
            return res.status(404).json({
                message: "Cars not found..."
            })
        }
        res.json(cars)
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createCars = async(req, res) => {
    const {marca, modelo, ano, km, cor, chassi, preco, userCarsId} = req.body

    try {
        const newCar = await Cars.create({
            marca, 
            ano,
            modelo, 
            km, 
            cor, 
            chassi, 
            preco,
            userCarsId
        })
        res.json(newCar)
    }catch (err){
        return res.status(500).json({
            message: err.message
        })
    }

    
}

export const updateCars = async(req, res) => {
    try {
        const {id} = req.params
        const {marca, modelo, ano, cor, preco} = req.body

        const car = await Cars.findByPk(id)
        car.marca = marca;
        car.modelo = modelo;
        car.ano = ano;
        car.preco = preco;
        car.cor = cor;

        await car.save()

        res.json(car)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}


export const deleteCars = async(req, res) => {
    try {
        const {id} = req.params
        await Cars.destroy({
            where: {
                id
            }
        })
        res.status(204)
    }catch (error) {
        return res.status(500).json({message: error.message})
    }
}