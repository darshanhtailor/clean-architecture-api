export default function makeFindByIdUser({ userDb }){
    return async function findByIdUser({ _id } ={}){
        if(!_id){
            throw new Error('You must supply an user id.')
        }
        return await userDb.findById({ _id })
    }
}