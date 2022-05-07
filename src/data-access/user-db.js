import User from './models/User.js'

export default function makeUserDb(){
    async function create({ ...userInfo }){
        const user = new User({...userInfo})
        return await user.save()
    }
    async function findById({_id}){
        const user = await User.find({ _id })
        return user
    }
    async function findByEmail({email}){
        const user = await User.findOne({ email })
        return user
    }
    async function findAll(){
        const users = await User.find({})
        return users
    }
    async function updateById({ _id, ...updateInfo}){
        const user = await User.findOneAndUpdate({ _id }, { ...updateInfo }, {
            new: true
        })
        return user
    }
    async function deleteById({ _id }){
        return await User.deleteOne({ _id })
    }
    async function deleteByFilter({ ...deleteInfo }){
        return await User.deleteMany({ ...deleteInfo })
    }

    return Object.freeze({
        create,
        findById,
        findByEmail,
        findAll,
        updateById,
        deleteById,
        deleteByFilter
    })
}

