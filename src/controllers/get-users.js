export default function makeGetUsers({ findByIdUser, findAllUser }){
    return async function getUsers(httpRequest){
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
            let user
            if(httpRequest.params._id){
                user = await findByIdUser({ _id: httpRequest.params._id })
            } else{
                user = await findAllUser()
            }

            return{
                headers,
                statusCode: 200,
                body: user
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