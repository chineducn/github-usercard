/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cardsContainer = document.querySelector('.cards');

//User get request
function axiosRequest(userName) {
  axios.get(`https://api.github.com/users/${userName}`)
  .then(userYes => {
    // debugger
    const userObj = userYes.data;
    const userProfile = cardCreator(userObj);
    cardsContainer.appendChild(userProfile);
  })
  .catch(userNo => {
    debugger
  });
}

axiosRequest('rodpa715');

//   //Followers get request
//   axios.get('https://api.github.com/users/rodpa715/following')
//   .then(followerYes => {
//     debugger
//     const followArray = followerYes.data;
//     const followersArray = followArray.map(followerObj => {
//       const followerCard = cardCreator(followerObj);
//       return followerCard
//     });
//     followersArray.forEach(follower => {
//       cardsContainer.appendChild(follower);
//     });
//     // console.log(followersArray[0]);
//     // const followerProfile = cardCreator(usObj);
//     // cardsContainer.appendChild(userProfile);
//   })
//   .catch(followerNo => {
//     debugger
//   });



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function cardCreator(userObj) {
  //Element creation
  const cardContainer = document.createElement('div');
  const imageItem = document.createElement('img');
  const infoContainer = document.createElement('div');
  const nameItem = document.createElement('h3');
  const usernameItem = document.createElement('p');
  const locationItem = document.createElement('p');
  const profileItem = document.createElement('p');
  const profileLink = document.createElement('a');
  const followerCount = document.createElement('p');
  const followingCount = document.createElement('p');
  const bioItem = document.createElement('p');

  //Adding attribues
  cardContainer.classList.add('card');
  infoContainer.classList.add('card-info');
  nameItem.classList.add('name');
  usernameItem.classList.add('username');

  //Adding values
  imageItem.src = userObj['avatar_url'];
  nameItem.textContent = userObj['name'];
  usernameItem.textContent = userObj['login'];
  locationItem.textContent = `Location: ${userObj['location']}`;
  profileItem.textContent = `Profile: ${profileLink}`;
  profileLink.href = userObj['html_url'];
  profileLink.textContent = userObj['html_url'];
  followerCount.textContent = `Followers: ${userObj['followers']}`;
  followingCount.textContent = `Following: ${userObj['following']}`;
  bioItem.textContent = `Bio: ${userObj['bio']}`;

  //Append away
  profileItem.appendChild(profileLink);
  infoContainer.appendChild(nameItem);
  infoContainer.appendChild(usernameItem);
  infoContainer.appendChild(locationItem);
  infoContainer.appendChild(profileItem);
  infoContainer.appendChild(followerCount);
  infoContainer.appendChild(followingCount);
  infoContainer.appendChild(bioItem);
  cardContainer.appendChild(imageItem);
  cardContainer.appendChild(infoContainer);

  return cardContainer;
}

// console.log(cardCreator());
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
