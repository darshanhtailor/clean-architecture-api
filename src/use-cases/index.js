import userDb from '../data-access/index.js'
import makeAddUser from './add-user.js'
import makeDeleteByFilterUser from './deletebyfilter-user.js'
import makeDeleteByIdUser from './deletebyid-user.js'
import makeFindAllUser from './findall-user.js'
import makeFindByIdUser from './findbyid-user.js'
import makeUpdateUser from './update-user.js'


const addUser = makeAddUser({ userDb })
const findByIdUser = makeFindByIdUser({ userDb })
const findAllUser = makeFindAllUser({ userDb })
const updateUser = makeUpdateUser({ userDb })
const deleteByIdUser = makeDeleteByIdUser({ userDb })
const deleteByFilterUser = makeDeleteByFilterUser({ userDb })

export {
    addUser,
    findByIdUser,
    findAllUser,
    updateUser,
    deleteByIdUser,
    deleteByFilterUser
}