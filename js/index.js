// document.getElementById('apply-bg').addEventListener('click',function(){
//     //  console.log('the apply button clicked')

//     // const friends = document.getElementsByClassName('friend');

//     // for(friend of friends){
//     //     friend.style.backgroundColor = "red";
//     // }
    
//     const friends = document.getElementsByClassName('friend');
//     // console.log(friends);
//     for (friend of frends){
//         // console.log(friend);

//         riend.styl.backgroundColor = "red"; 
//     }
    
// })

document.getElementById('apply-bg').addEventListener('click', function() {
    const friends = document.getElementsByClassName('friend');
    for (friend of friends) {
        friend.style.backgroundColor = "red";
    }
});

document.getElementById('center-third').addEventListener('click',function(){
    // console.log('third button clicked');
    const third = document.getElementById('third-friend');
     third.style.textAlign = 'center';
})

document.getElementById('first-button-right').addEventListener('click',function(){
    // console.log('first button clicked')

    const first = document.getElementById('style-third-button');
    first.style.textAlign = 'right';
})

// document.getElementById('add-friend').addEventListener('click',function(){
//     // console.log('adding')

//     const friendContainer = document.getElementById('friends');
    
//     const friend = document.createElement('div');

//     friend.innerHTML = `
//         <h3 class = 'friend-names'> NEW friend </h3>
//         <p>  something new added </p>
//     `

//     friendContainer.appendChild(friend);
// })

// document.getElementById('add-friend').addEventListener('click',function(){
//     // console.log('added friend button clicked');
//     const friendContainer = document.getElementById('friends');

//     const friend = document.createElement('div');
//     friend.classList.add('friend');

//     friend.innerHTML = `
//         <h3 class="friend-names"> added new friend button and click show up </h3>    
//         <p>  this is paragraph tag </p>
//     `
    
//     friendContainer.appendChild(friend);
// });

