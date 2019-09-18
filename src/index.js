console.log('%c HI', 'color: yellow')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// document.addEventListener("DOMContentLoaded", function(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(dogoUrls => {
    // debugger
    dogoUrls.message.map(dogPicUrl => {
      let frame = document.querySelector("#dog-image-container")
      let dogElement = document.createElement("img")
      dogElement.src = dogPicUrl
      frame.appendChild(dogElement)

    })



    // let dogPicUrl = dogoUrls.message[0]
    // debugger
    // document.createElement("")




      // fetch(dogPicUrl)
      // .then(r => r.json())
      // .then(data => {debugger})
  })
// })

/*
on page load
-X fetch the images using the url above ⬆️
-X parse the response as `JSON`
-X add image elements to the DOM **for each**🤔 image in the array
*/
