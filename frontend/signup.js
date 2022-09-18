const fullname=document.getElementById("fullname");
const email=document.getElementById("email");
const username=document.getElementById("username");
const password=document.getElementById("password");
const signup=document.getElementById("signup");


signup.addEventListener('click', sign_up);


function sign_up(){

fetch('http://localhost/twitter-1/signup.php',{
        method:'POST',
        body:new URLSearchParams({"fullname":fullname.value,"email":email.value,"username":username.value,"password":password.value}),
    }).then(result => result.json())
    .then(data =>{ 
    localStorage.setItem('id',data.id)
    window.location.href="home.html";
    });

}
