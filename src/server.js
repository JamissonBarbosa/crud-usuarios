import express from 'express'
import {sequelize} from './database/database.js'

const app = express()


app.use(express.json())

async function main() {
    await sequelize.sync({force: false});
    app.listen(4000);
    console.log("Server on port 4000");
  }
  
main();