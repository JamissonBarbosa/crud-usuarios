import express from 'express'
import {sequelize} from './database/database.js'

import './models/Users.js'
import './models/Cars.js'

const app = express()
app.use(express.json())

async function main() {
  try {
    await sequelize.sync({force: true});
    app.listen(3000, () => console.log('Server  is running'))
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main()