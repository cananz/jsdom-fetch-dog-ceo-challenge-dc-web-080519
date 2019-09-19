// console.log('%c HI', 'color: yellow')


document.addEventListener("DOMContentLoaded", function(){
  console.log("taking some puppy pics") //challenge 1
  fetchPics()

  console.log("listing dog breeds") //challenge 2
  fetchBreeds()

 })


 // [x] addEventListener - click
 // [x] dog-breed list item
 // [x] change font color of that item

 function breedClick(e) {
   console.log("click on " + e.currentTarget.id)

   // debugger
   e.currentTarget.style.color = "#9ACD32"
 }

 function fetchBreeds() {
   // [x] on page load, fetch all the dog breeds
   // [x] add the breeds to the page in an <ul>
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
       dogBreedLI.addEventListener("click", breedClick)
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
