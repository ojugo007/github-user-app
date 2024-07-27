let user = document.getElementById("username");
let container = document.querySelector("#container");
let userContainer = document.createElement("div");

function getUserData(event) {
  event.preventDefault();
  let userName = user.value;
  let url = `https://api.github.com/users/${userName}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        //redirect the user to 404 page
        window.location.href = `404.html`;
      }
      return response.json();
    })
    .then((data) => {
      if(data.name == null){
        //the name is a required field for github users, redirect to 404 page if null
        window.location.href = `404.html`;
      }else{
      let queryParams = new URLSearchParams();
      queryParams.append("userName", userName);
      queryParams.append("data", JSON.stringify(data));
      window.location.href = `user/index.html?${queryParams.toString()}`;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

document.getElementById("search-button").addEventListener("click", function () {
  const spinner = document.getElementById("spinner");
  const buttonText = document.getElementById("button-text");

  spinner.style.display = "inline-block";
  buttonText.style.display = "none";

  setTimeout(() => {
    spinner.style.display = "none";
    buttonText.style.display = "inline-block";
  }, 9000);
});
