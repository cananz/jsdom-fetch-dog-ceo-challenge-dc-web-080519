// console.log('%c HI', 'color: yellow')


document.addEventListener("DOMContentLoaded", function(){
  console.log("taking some puppy pics")
  fetchPics()
  console.log("listing dog breeds")
  fetchBreeds()
 })

 // [ ] on page load, fetch all the dog breeds
 // [ ] add the breeds to the page in an <ul>

 function fetchBreeds() {
   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
   fetch(breedUrl)
   .then(res => res.json())
   .then(dogBreedHash => {

     let breeds = Object.keys(dogBreedHash.message)
     breeds.map(breedName => {

       let breedList = document.getElementById("dog-breeds")
       let dogBreedLI = document.createElement("li")

       dogBreedLI.innerText = breedName
       dogBreedLI.id = breedName
       breedList.appendChild(dogBreedLI)
     })
   })
 }

function fetchPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(res => res.json())
  .then(dogoUrls => {
    dogoUrls.message.map(dogPicUrl => {
      let frame = document.querySelector("#dog-image-container")
      let dogElement = document.createElement("img")

      dogElement.src = dogPicUrl
      dogElement.style.width = "25%"
      frame.appendChild(dogElement)
    })
  })
}
