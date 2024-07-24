let user = document.getElementById("username");
let container = document.querySelector('#container');
let userContainer = document.createElement('div');

function getUserData(event){
    event.preventDefault();
    let userName = user.value;
    let url = `https://api.github.com/users/${userName}`
    fetch(url)
    .then((response) =>{
        if(!response.ok){
            throw new Error("an error occured")
        }
        return response.json();
    })
    .then(data =>{
        let queryParams = new URLSearchParams();
        queryParams.append("userName", userName);
        queryParams.append('data', JSON.stringify(data));
        window.location.href = `user/index.html?${queryParams.toString()}`

    })
    .catch((error)=>{
        console.error('Error fetching data:', error);
    })
    

}