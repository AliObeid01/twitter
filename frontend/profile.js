const id=localStorage.getItem('id');
const fullname=document.getElementById('fullname');
const username=document.getElementById('username');
const text=document.getElementById('text');
const time=document.getElementById('time');
const usertofollow=document.getElementById('usertofollow');
const signout=document.getElementById('signout');
const fname=document.getElementById('fname');
const usern=document.getElementById('usern');
const reg_time=document.getElementById('reg_time');


signout.addEventListener('click', sign_out);



window.onload=(loaded) =>{
  console.log(id)

    if(id==null){
       window.location.href="signup.html";
     }
    else{
       fetch(`http://localhost/twitter-1/usertweets.php`,{
        method:'POST',
        body:new URLSearchParams({"id":id}),
      })
       .then(response => response.json())
       .then(data =>{
        for(let i=0;i<data.length;i++){
          let tweet_id=data[i].id
          tweet.innerHTML+=`<div class="tweet-info">
          <img src="images/Jc9RL5o7_400x400.jpg" class="profile-in-tweet">
          <h3 id="fullname" class="name">${data[i].fullname}</h3>
          <h3 id="username" class="username">${data[i].username}</h3>
          <p id="time" class="time">${data[i].date_time}</p>
          <span class="tweet-spn"></span>
      </div>
      <p id="text" class="tweet-content">
      ${data[i].text}
      </p>`
        }
       });  

       fetch(`http://localhost/twitter-1/userstofollow.php`,{
        method:'POST',
        body:new URLSearchParams({"id":id}),
      })
       .then(response => response.json())
       .then(data =>{
        for(let i=0;i<data.length;i++){
          let id_follow=data[i].id
          usertofollow.innerHTML+=
          `<div class="suggestion">
          <div class="img-suggestion-div">
              <img src="images/profile.png">
          </div>
          <h4 class="suggested-name"><a href="profiles.html?id=${data[i].id}">${data[i].fullname}@${data[i].username}</a></h4>
          <button class="follow-suggestion" onclick=user_follow(${id_follow})>Follow</button>    
      </div>`
        }
       });

       fetch(`http://localhost/twitter-1/profile.php`,{
        method:'POST',
        body:new URLSearchParams({"id":id}),
      })
       .then(response => response.json())
       .then(data =>{

        fname.innerHTML=`${data[0].fullname}`
        usern.innerHTML=`${data[0].username}`
        reg_time.innerHTML=`joined on ${data[0].register_time}`
        
       }); 

     }

 }


 function encodeImageFileAsURL(element) {
   let file = element.files[0];
   let reader = new FileReader();
   reader.onloadend = function() {
     console.log(reader.result);
   }
   reader.readAsDataURL(file);

   fetch(`http://localhost/twitter-1/convertimage.php`,{
    method:'POST',
    body:new URLSearchParams({"image":reader.result}),
}).then(result => result.text())
.then(data =>{
  console.log(data)
  return data;
});
}
   

 function sign_out(){

    localStorage.removeItem('id');
    

 }

 function user_follow(id_follow){
   
   fetch(`http://localhost/twitter-1/userfollow.php`,{
               method:'POST',
               body:new URLSearchParams({"follow_id":id_follow,"user_id":id}),
           }).then(result => result.json())

     location.reload();
   }



