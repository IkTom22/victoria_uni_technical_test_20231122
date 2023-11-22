const dataUrl = "https://randomuser.me/api/?results=3"

const data = fetch(dataUrl)
.then((result)=>result.json())
.then(data=>{
    console.log(data.results)
    data.results.map(profile => createProfileCard(profile))})
.catch((error)=>{
    console.log(error)
    throw new Error ('somethingwent wrong with fetching')
}) 
console.log(data)
const profileContainer= document.getElementById('profilContainer')
function createProfileCard(profile){
    const{picture, location, phone, name, login }=profile
    const card = document.createElement('div')
    card.classList.add("card")
    card.setAttribute('key', login.uuid)
    profileContainer.appendChild(card)
    // creating inside the card div
    const image = picture.large
    const fullName = `${name.first} ${name.last}`
    card.innerHTML = `
            <img src=${image}  class="card_img"/>
            <h3>${fullName}</h3> 
            <div class="address_div">
             <p>${location.street.number}</p>
             <p>${location.street.name}</p>
             <p>${location.city}</p>
             <p>${location.state} ${location.postcode}</p>
             <p>${location.country}</p>
            </div>
            <p>${phone}</p>
     
           
    `

  
}




