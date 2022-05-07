import express from 'express'
import { createUser, getUsers, patchUser, deleteUser} from './controllers/index.js'
import makeCallback from './express-callback/index.js'
const app = express()

app.use(express.json())

app.post('/users', makeCallback(createUser))
app.get('/users/:_id', makeCallback(getUsers))
app.get('/users', makeCallback(getUsers))
app.patch('/users', makeCallback(patchUser))
app.delete('/users/:_id', makeCallback(deleteUser))
app.delete('/users', makeCallback(deleteUser))

app.listen(3000, ()=>{
    console.log('Server started on port 3000')
})