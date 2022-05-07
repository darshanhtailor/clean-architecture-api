export default function makeDeleteUser({ deleteByIdUser, deleteByFilterUser }){
    return async function deleteUser(httpRequest){
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
            let deleted
            if(httpRequest.params._id){
                deleted = await deleteByIdUser({ _id: httpRequest.params._id })
            } else{
                deleted = await deleteByFilterUser(httpRequest.body)
            }

            return{
                headers,
                statusCode: 200,
                body: deleted
            }
        } catch(e){
            return{
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}