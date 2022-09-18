const email=document.getElementById("email");
const password=document.getElementById("password");
const signin=document.getElementById("signin");


signin.addEventListener('click', sign_in);

function sign_in(){

    fetch(`http://localhost/twitter-1/signin.php`,{
      method:'POST',
      body:new URLSearchParams({"email":email.value,"password":password.value}),
    })
     .then(response => response.json())
     .then(data =>{

        localStorage.setItem('id',data[0].id)
        window.location.href="home.html";
        
    });
    }