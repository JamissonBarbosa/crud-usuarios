import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import {Cars} from './Cars.js'


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
    name:{
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

Users.hasMany(Cars, {
    foreignkey: 'userCarsId',
    sourceKey: 'id'
})

Users.belongsTo(Users, {
    foreignkey: 'userCarsId',
    targetID: 'id'
})

