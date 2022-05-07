export default function buildCreateUser(){
    return function createUser({
        name,
        email,
        createdOn = Date.now()
    } = {}){

        return Object.freeze({
            getName: () => name,
            getEmail: () => email,
            getCreatedOn: () => createdOn,
        })
    }
}