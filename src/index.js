console.log('%c HI', 'color: yellow')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
  fetchPics()
  fetchBreeds()
 })

 // [ ] on page load, fetch all the dog breeds
 // [ ] add the breeds to the page in an <ul>

 function fetchBreeds() {
   fetch(breedUrl)
   .then(res => res.json())
   .then(breeds => {
     {debugger}
     dogoUrls.message.map(dogPicUrl => {
       let frame = document.querySelector("#dog-image-container")
       let dogElement = document.createElement("img")

       dogElement.src = dogPicUrl
       dogElement.style.width = "25%"
       frame.appendChild(dogElement)
     })
   })
 }

function fetchPics() {
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
