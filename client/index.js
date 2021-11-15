
const dogButton = document.querySelector("#dogButton")


function getDogData() {
    fetch('http://localhost:3000/dogs')
        .then(r => r.json())
        .then(appendDogs)
    dogButton.disabled = true
}

function appendDogs(dogs){
    dogs.forEach(appendDog);
    const dogsList = document.querySelector('div');
    let dummy;

    for (let i=1; i < 4; i++) {
        dummy = document.createElement('button')
        dummy.setAttribute("id", `doggy${i}`)
        dummy.textContent = `See doggy ${i}`
        dogsList.append(dummy)
        dummy.addEventListener("click", addDoggy)
    }
};
let doggies; 

function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    }else{
      return Promise.reject(new Error(response.statusText));
    }
  }

function appendDog(dogData){
    const newLi = document.createElement('p');
    newLi.textContent = `Name: ${dogData.name} || Age: ${dogData.age}`
    const dogsList = document.querySelector('div');
    dogsList.append(newLi);
};

async function addDoggy() {
    const img = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await img.json()
    console.log(data.message)
    const dogPic = document.createElement("img")
    dogPic.setAttribute("src", data.message)
    document.body.append(dogPic)
    this.disabled = true
}


dogButton.addEventListener("click", (getDogData))



