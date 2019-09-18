console.log('%c HI', 'color: yellow')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
  
  fetch(imgUrl)
  .then(res => res.json())
  .then(dogoUrls => {

    dogoUrls.message.map(dogPicUrl => {
      let frame = document.querySelector("#dog-image-container")
      let dogElement = document.createElement("img")
      dogElement.src = dogPicUrl
      frame.appendChild(dogElement)
    })
  })

  fetch(breedUrl)






})
