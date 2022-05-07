import createUser from '../user/index.js'

export default function makeUpdateUser({ userDb }){
    return async function updateUser({ _id, ...changes } = {}){
        if(!_id){
            throw new Error('You must supply an user id.')
        }

        const existing = await userDb.findById({ _id })
        if(!existing){
            throw new Error('User not found.')
        }

        const user = createUser({ ...existing, ...changes })

        const check = await userDb.findByEmail({ email: user.getEmail() })
        if(check){
            throw new Error('User with supplied email already exists.')
        }

        return userDb.updateById({
            _id,
            name: user.getName(),
            email: user.getEmail(),
        })
    }
}