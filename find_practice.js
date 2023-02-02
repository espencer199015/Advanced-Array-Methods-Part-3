//findUserByUsername

function findUserByUsername(usersArr, username) {
    return usersArr.find(function(user){
        return user.username === username;
    })
}

