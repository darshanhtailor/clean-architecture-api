export default function makeCreateUser({ addUser }){
    return async function createUser(httpRequest){
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
            const created = await addUser(httpRequest.body)
            return {
                headers,
                statusCode: 201,
                body: created
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