const users = []

const addUser = ({ id, username, room}) => {
    //Clearn the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    
    //validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required!!'
        }
    }
    //check for existing user
    const existingUser = users.find((user) => {
    return user.room === room && user.username ===username
    })

    if(existingUser){
        return {
            error: 'Username is in use'
        }
    }

    const user = {id, username, room}
    users.push(user)

    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const user = users.filter((user) => user.id === id)
    if(user.length === 0) {
        return {
            error: `No user found with id:${id}`
        }
    }
   return {user}
}

const getUsersInRoom = (room) => {
    const user = users.filter((user) => user.room === room)
    if(user.length === 0) {
        return {
            error: `No users found in the room:${room}`
        }
    }
   return user
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}