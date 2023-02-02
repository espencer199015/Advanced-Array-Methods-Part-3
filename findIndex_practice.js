//removeUser

function removeUser(usersArr, username) {
    let foundIndex = usersArr.findIndex(function(user){
        return user.username === username;
    })
    if(foundIndex === -1) return;
    return usersArr.splice(foundIndex,1)[0];
}