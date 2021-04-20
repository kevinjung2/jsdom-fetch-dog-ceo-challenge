console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(json => for (let image in json) {
    let img = document.addElement('img')
    img.innerHTML = image
  })
})
