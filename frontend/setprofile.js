const id=localStorage.getItem('id');
const phone=document.getElementById('phone');
const bio=document.getElementById('bio');
const dob=document.getElementById('dob');
const save=document.getElementById('save');

save.addEventListener('click',save_change);

function save_change(){

    fetch('http://localhost/twitter-1/addinfo.php',{
        method:'POST',
        body:new URLSearchParams({"dob":dob.value,"bio":bio.value,"phone":phone.value,"user_id":id}),
    }).then(result => result.json())
    
    window.location.href="profile.html";

}

