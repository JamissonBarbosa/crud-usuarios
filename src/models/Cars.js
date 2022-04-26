import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'


export const Cars = sequelize.define('users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca:{
        type: DataTypes.STRING,
    },
    modelo:{
        type: DataTypes.STRING,
    },
    ano:{
        type: DataTypes.STRING,
    },
    km:{
        type: DataTypes.STRING,
    }, 
    cor:{
        type: DataTypes.STRING,
    }, 
    chassi:{
        type: DataTypes.STRING,
    }, 
    preco:{
        type: DataTypes.STRING,
    },
    createdAt: true,
    updatedAt: true
    
})