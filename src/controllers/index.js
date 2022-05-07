import  makeCreateUser from './create-user.js'
import makeDeleteUser from './delete-users.js'
import makeGetUsers from './get-users.js'
import makePatchUser from './patch-user.js'
import { addUser, findByIdUser, findAllUser, updateUser, deleteByIdUser, deleteByFilterUser } from '../use-cases/index.js'

const createUser = makeCreateUser({ addUser })
const getUsers = makeGetUsers({ findByIdUser, findAllUser })
const patchUser = makePatchUser({ updateUser })
const deleteUser = makeDeleteUser({ deleteByIdUser, deleteByFilterUser })

export {
    createUser,
    getUsers,
    patchUser,
    deleteUser
}