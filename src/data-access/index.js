import mongoose from 'mongoose'
import makeUserDb from './user-db.js'

const mongoURI = 'mongodb://127.0.0.1:27017/clean-api'
mongoose.connect(mongoURI)

const userDb = makeUserDb()
export default userDb