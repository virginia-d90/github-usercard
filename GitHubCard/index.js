/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get(`https://api.github.com/users/virginia-d90`)

// .then(result => {
//   console.log(result.data)
//   cardMaker(result.data)
// })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const entryPoint = document.querySelector('.cards')

axios.get(`https://api.github.com/users/virginia-d90`)
.then(result => {
  console.log(result.data)
  const newCard = cardMaker(result.data)
  entryPoint.appendChild(newCard)
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
.then(result => {
  console.log(result.data)
  const newCard = cardMaker(result.data)
  entryPoint.appendChild(newCard)
})
})

//THIS IS WHERE MY REQUESTS ALLOTMENT WAS REACHED
// function getHub(entryArr){
//   entryArr.forEach(item => {
//     axios.get(`https://api.github.com/users/${item}`)
//       .then(result => {
//         result.data.forEach(entry => {
//           const newCard = cardMaker(result.data)
//           entryPoint.appendChild(newCard)
//         })
//       })

//       .catch(error => {
//         console.log('action fail')
//       })
//   })
// }
// getHub(followersArray)
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function cardMaker(attrs){
  const {avatar_url, bio, followers, following, html_url, location, login, name} = attrs

  //create elements
  const card = document.createElement('div')
  const profileImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardTitle = document.createElement('h3')
  const userHandle = document.createElement('p')
  const userLocal = document.createElement('p')
  const userProfile = document.createElement('p')
  const userLink = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  //create structure
  card.appendChild(profileImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardTitle)
  cardInfo.appendChild(userHandle)
  cardInfo.appendChild(userLocal)
  cardInfo.appendChild(userProfile)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)
  userProfile.appendChild(userLink)

  //add classnames
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardTitle.classList.add('name')
  userHandle.classList.add('username')
  
  //add textContent
  profileImg.src = avatar_url
  cardTitle.textContent = name
  userHandle.textContent = login
  userLocal.textContent = `Location: ${location}`
  userLink.href = html_url
  userLink.textContent = `Profile: ${html_url}`
  userFollowers.textContent = `Followers: ${followers}` 
  userFollowing.textContent = `Following: ${following}`
  userBio.textContent = `Bio: ${bio}`

return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
