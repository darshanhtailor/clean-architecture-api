import createUser from '../user/index.js'

export default function makeAddUser({ userDb }){
    return async function addUser(userInfo){
        const user = createUser(userInfo)
        const exists = await userDb.findByEmail({ email: user.getEmail() })

        if(exists) return exists

        return userDb.create({
            name: user.getName(),
            email: user.getEmail(),
            createdOn: user.getCreatedOn()
        })
    }
}