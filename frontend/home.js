const id=localStorage.getItem('id');
const tweet=document.getElementById('tweet');
const fullname=document.getElementById('fullname');
const username=document.getElementById('username');
const text=document.getElementById('text');
const time=document.getElementById('time');
const usertofollow=document.getElementById('usertofollow');
const signout=document.getElementById('signout');
const tweet_layout=document.getElementById('tweet_layout');

signout.addEventListener('click', sign_out);
tweet.addEventListener('click', add_tweet);


window.onload=(loaded) =>{
  console.log(id)

    if(id==null){
       window.location.href="signup.html";
     }
    else{
       fetch(`http://localhost/twitter-1/displaytweets.php`)
       .then(response => response.json())
       .then(data =>{
        for(let i=0;i<data.length;i++){
          let tweet_id=data[i].id
          tweet_layout.innerHTML+=`<div class="tweet-info">
          <img src="images/Jc9RL5o7_400x400.jpg" class="profile-in-tweet">
          <h3 id="fullname" class="name">${data[i].fullname}</h3>
          <h3 id="username" class="username">${data[i].username}</h3>
          <p id="time" class="time">${data[i].date_time}</p>
          <span class="tweet-spn"></span>
      </div>
      <p id="text" class="tweet-content">
      ${data[i].text}
      </p>`
        }});
        

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

 function add_tweet(data){

    fetch(`http://localhost/twitter-1/addtweet.php`,{
                method:'POST',
                body:new URLSearchParams({"text":text.value,"image":data,"user_id":id}),
            }).then(result => result.json())
            location.reload();
    }

 function like_tweet(tweet_id){
   
        fetch(`http://localhost/twitter-1/liketweet.php`,{
                    method:'POST',
                    body:new URLSearchParams({"tweet_id":tweet_id,"user_id":id}),
                }).then(result => result.json())
    
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



