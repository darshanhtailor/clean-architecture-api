export default function makePatchUser({ updateUser }){
    return async function patchUser(httpRequest){
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
            const toEdit = {
                _id: httpRequest.params._id,
                ...httpRequest.body
            }

            const patched = await updateUser(toEdit)
            return {
                headers,
                statusCode: 201,
                body: patched
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