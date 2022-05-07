export default function makeDeleteByIdUser({ userDb }){
    return async function deleteByIdUser({ _id } ={}){
        if(!_id){
            throw new Error('You must supply an user id.')
        }
        return await userDb.deleteById({ _id })
    }
}