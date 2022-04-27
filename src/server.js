import express from 'express'
import {sequelize} from './database/database.js'
import usersRoutes from './routes/users.routes.js'
import carsRoutes from './routes/cars.routes.js'
//import './models/Users.js'
//import './models/Cars.js'

const app = express()

app.use(express.json())


app.use(usersRoutes)
app.use(carsRoutes)



async function main() {
  try {
    await sequelize.sync({force: false});
    app.listen(3000, () => console.log('Server  is running'))
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
main()