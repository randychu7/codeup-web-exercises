

(async() => {

async function getUsersApi(username){
    try {
        let getUsers = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.github}`}});
        let data = await getUsers.json();
        // return data;
        let mapped = data[0];
        console.log(mapped)
        } catch(error){
            console.log(error)
        }
    }
 
    console.log(await getUsersApi('randychu7'));
   

function getUser(username){
return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.github}`}})
.then(response => response.json()).then((data) => {
    return data[0].created_at;
})

}
getUser('randychu7').then(console.log)

// const getName = async (username) => {
// try {
//    const profiles = await fetch('./data/profiles.json');
//    const data = await profiles.json();
//    const data2 = data[0].${username};
//     return data2;
// } catch (error){
//     console.log(error)
// }
// }

// console.log(await getName('sandy123'));
const getName = async (username) => {
    try {
      const profiles = await fetch('./data/profiles.json');
      const data = await profiles.json();
    //   console.log(data)
      const data2 = data[0][username];
      return data2;
    } catch (error) {
      console.log(error);
    }
  };
  
let names = await getName('sally123');
// let inputNames = $('input').val();
console.log(names)

$('button').on('click',function (e) {
    e.preventDefault();
    if (names === 'brown'){
        $('body').css('background-color', 'brown');
    } else if (names === 'green'){
        $('body').css('background-color', 'green');
    } else if (names === 'blue'){
        $('body').css('background-color', 'blue');
    }
})


 })();


// Get specific user



