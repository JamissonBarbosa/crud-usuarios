import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'


export const Users = sequelize.define('users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    nome:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    senha:{
        type: DataTypes.STRING,
    },
    cpf:{
        type: DataTypes.STRING,
    }, 
    avatar:{
        type: DataTypes.STRING,
    }, 
    biografia:{
        type: DataTypes.STRING,
    }, 
    createdAt: true,
    updatedAt: true
    
})