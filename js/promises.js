

(async () => {

async function getUsersApi(username){
    try {
        let getUsers = await fetch(`https://api.github.com/users/${username}`, {headers: {'Authorization': `${keys.github}`}});
        console.log(getUsers);
        let data = await getUsers.json();
        console.log(data);
        return data;
        } catch(error){
            console.log(error)
        }
    }
 
    let selectedUser = await getUsersApi('randychu7');
    console.log(selectedUser.updated_at)

})();


// Get specific user



