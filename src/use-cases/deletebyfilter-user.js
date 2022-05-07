export default function makeDeleteByFilterUser({ userDb }){
    return async function deleteByFilterUser({ ...filter } ={}){
        return await userDb.deleteByFilter({ ...filter })
    }
}