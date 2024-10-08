const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const displayCategories = (data) => {
  let container = document.getElementById("btn-container");
  data.forEach((item) => {


    let buttonContent = document.createElement("div");

    buttonContent.innerHTML = `
        
        <button onclick = "clickCard('${item?.category}')" class="border-2 py-4 px-14 rounded-3xl flex items-center justify-center">
                    <div class="w-10 h-10">
                        <img src="${item.category_icon}" alt="" class="w-full h-full">
                    </div>

                    <h1 class="text-xl font-bold">${item.category}</h1>
        </button>
        `;
    container.append(buttonContent);
  });
};

const clickCard = (category) => {
  const cardContainer = document.getElementById("petCard_section");

  
  cardContainer.innerHTML = `<span class="loading loading-bars loading-lg"></span>`;

  
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const allPets = data.pets;
      const filteredPets = allPets.filter((pet) => pet.category === category);

     
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filteredPets);
        }, 2000);
      });
    })
    .then((filteredPets) => {
   
      if (filteredPets.length === 0) {
        cardContainer.innerHTML = `</p>
        <img src="./images/error.webp" alt="not-found">
        `;
      } else {
        displayCard(filteredPets); 
      }
    });
};

const loadDetails = (pet_Id) => {
  const intId = parseInt(pet_Id);
  const petIndex = intId - 1;
  fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res) => res.json())
    .then((data) => {
      const allPets = data.pets;
      const selectedPet = allPets[petIndex];
      displayDetails(selectedPet);
    });
};

const displayDetails = (data) => {
  const modal = document.getElementById("modalContant");

  modal.innerHTML = `
  <figure>
        <figure>
          <div>
            <img id="modalimg" src=${data.image} class="p-2 rounded-2xl" alt="Shoes"  />
          </div>
        </figure>
  
  
      </figure>
  
      <div class="card-body">
        <h2 class="card-title font-semibold" id="petName">${data.pet_name}</h2>
  
       <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
              <img src="https://img.icons8.com/?size=24&id=115265&format=png" alt="">
              <h1 class="font-bold" id="petBreed">Breed:  ${
                              data.breed ? data.breed : "No found"
                            }</h1>
            </div>
            
            <div class="flex items-center gap-2">
              <img src="https://img.icons8.com/?size=24&id=85102&format=png" alt="">
              <h1 class="font-bold" id="petBirth">Birth: ${data.date_of_birth === null ? "Birth is Not found" :data.date_of_birth ? data.date_of_birth : "Data is Not defined"  }</h1>
            </div>
       </div>
  
        <div class="flex items-center gap-20">
          <div class="flex items-center gap-2">
              <i class="fa-solid fa-venus"></i>
              <h1 class="font-bold" id="petGender">Gender: ${data.gender ? data.gender : "Gender id not found" }</h1>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-dollar-sign"></i>
              <h1 class="font-bold" id="petPrice">Price : ${data.price ? data.price : "Price is not found"}$</h1>
            </div>
        </div>
  
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-venus"></i>
          <h1 class="font-bold" id="petVaccinated">Vaccinated : ${data.vaccinated_status ? data.vaccinated_status : "vaccinated_status is not found"}</h1>
        </div>
  
        <hr>
  
  
        <div class="mt-7">
          <h1 class="font-bold">Details Information :</h1>
  
          <p id="petDetails">${data.pet_details ? data.pet_details : "pet_details is not found"}</p>
        </div>
        <form method="dialog">
          <button class="text-color1 font-bold w-11/12 mx-auto py-2 border-2 rounded-xl">Cancel</button>
        </form>
      </div>
  
  
  
  `;
  document.getElementById("my_modal_1").showModal();
};

const loadCard = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayCard(data.pets));
};

const displayCard = (data) => {
  let cardContainer = document.getElementById("petCard_section");
  cardContainer.innerHTML = "";
  data.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="card card-compact bg-base-100 w-64 shadow-xl border-2">
                        <figure>
                          <div>
                            <img
                            src="${item.image}" class="p-2 rounded-2xl"
                            alt="Shoes" /></div>
                        </figure>

                        <div class="card-body">
                          <h2 class="card-title font-semibold">${
                            item.pet_name
                          }</h2>

                          <div class="flex items-center gap-2">
                            <img src="https://img.icons8.com/?size=24&id=115265&format=png" alt="">
                            <h1 class="font-bold">Breed: ${
                              item.breed ? item.breed : "No found"
                            }</h1>
                          </div>
                          
                          <div class="flex items-center gap-2">
                            <img src="https://img.icons8.com/?size=24&id=85102&format=png" alt="">
                            <h1 class="font-bold">Birth: ${
                              item.date_of_birth === null ? "No found" : item.date_of_birth  ? item.date_of_birth: "Data is not defined"
                            }</h1>
                          </div>

                          <div class="flex items-center gap-2">
                            <i class="fa-solid fa-venus"></i>
                            <h1 class="font-bold">Gender: ${
                              item.gender ? item.gender : "No found"
                            }</h1>
                          </div>
                          <div class="flex items-center gap-2">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <h1 class="font-bold">Price : ${
                              item.price ? item.price : "Price is not found"
                            }$</h1>
                          </div>

                          <hr>


                          <div class="flex items-center justify-center gap-2">
                            <button onclick ="likeImages('${
                              item.image
                            }')" class="border py-3 px-4 rounded-xl">
                                <img src="https://img.icons8.com/?size=32&id=33481&format=png" alt="">
                            </button >
                            <button id = "adoptBtn" onclick="castomModal2(${
                              item.petId
                            })" class="border py-3 px-4 rounded-xl text-color1 font-bold">
                                Adopt
                            </button>
                            <button  onclick="loadDetails('${
                              item.petId
                            }')"  class="border py-3 px-4 rounded-xl text-color1 font-bold">
                                Details
                            </button>
                          </div>
                          
                        </div>
                      </div>
        
        
        `;
    cardContainer.append(div);
  });
};

let countdownValue = 3;
let countdownInterval;
const castomModal2 = (id) => {
  const countdownText = document.getElementById("countdownText");
  countdownValue = 3;
  countdownText.innerText = countdownValue;

  countdownInterval = setInterval(() => {
    countdownValue--;
    countdownText.innerText = countdownValue;

    if (countdownValue <= 0) {
      closeModal(id);
    }
  }, 1000);

  document.getElementById("castomModal").showModal();
};

let countdownModal = document.getElementById("castomModal");

function closeModal(id) {
  clearInterval(countdownInterval);
  countdownModal.close();
  countdownValue = 3;
  document.getElementById("countdownText").innerText = countdownValue;
  const cardIndex = id - 1;
  const allCards = document.querySelectorAll(".card");
  const adoptedPet = allCards[cardIndex];
  const adoptButton = adoptedPet.childNodes[3].childNodes[13].childNodes[1];
  adoptButton.setAttribute("disabled", "true");
  console.log(adoptButton.hasAttribute("disabled")); // Should log 'true'
  console.log(adoptButton);
}

const loadModal = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => disPlayModal(data.pets));
};

const likeImages = (img) => {
  let div = document.getElementById("inputImg");

  let imgSrc = document.createElement("div");

  imgSrc.innerHTML = `
  <img src="${img}" alt="" class = " rounded-2xl" />
  `;
  div.append(imgSrc);
};

const sortByPrice = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const sortedPets = data.pets.sort((a, b) => b.price - a.price);
      console.log(sortedPets);
      displayCard(sortedPets);
    });
};

loadCategories();
loadCard();
