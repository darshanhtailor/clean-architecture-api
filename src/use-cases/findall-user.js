export default function makeFindAllUser({ userDb }){
    return async function findAllUser(){
        return await userDb.findAll()
    }
}