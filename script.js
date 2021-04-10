const DOG_URL =   'https://dog.ceo/api/breeds/image/random'
const addDogs = document.querySelector('.add-new-dogs')
const doggosSection = document.querySelector('.doggos')



addDogs.addEventListener('click', addNewDogs)


function addNewDogs(params) {
  
  
  const promise = fetch(DOG_URL)

      promise
  .then((res) => {
    const processingPromise = res.json()
    return processingPromise
  }).then((processedPromise) => {
    const img = document.createElement('img')
    img.src = processedPromise.message
    img.alt = 'cute dogs'
    doggosSection.appendChild(img)
    
  }) 
  
  }

 

