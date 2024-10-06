const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then (res => res.json())
    .then (data => displayCategories(data.categories))
    .catch(error => console.log(error));
  
}




const displayCategories = (data) =>{
  console.log(data);
    let container = document.getElementById("btn-container")
    container.innerHTML = ""
    data.forEach ((item) => {
        console.log(item);

        let buttonContent = document.createElement("div");

        buttonContent.innerHTML = `
        
        <button onclick ="clickCard()" class="border-2 py-4 px-14 rounded-3xl flex items-center justify-center">
                    <div class="w-10 h-10">
                        <img src="${item.category_icon}" alt="" class="w-full h-full">
                    </div>

                    <h1 class="text-xl font-bold">${item.category}</h1>
        </button>
        
        
        `
        container.append(buttonContent); 
    })

    

}

// {
//     "petId": 13,
//     "breed": "Netherland Dwarf",
//     "category": "Rabbit",
//     "date_of_birth": "2023-05-10",
//     "price": 180,
//     "image": "https://i.ibb.co.com/f4MRfWZ/pet-13.jpg",
//     "gender": "Male",
//     "pet_details": "This tiny male Netherland Dwarf rabbit, born on May 10, 2023, is perfect for small spaces. He enjoys gentle handling and loves to explore. Priced at $180, he's great for first-time rabbit owners.",
//     "vaccinated_status": "Not",
//     "pet_name": "Pip"
// }


const loadCard = () =>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => displayCard(data.pets))
}


const displayCard = (data) =>{

    let cardContainer = document.getElementById("petCard_section")
    cardContainer.innerHTML =""
    data.forEach((item) =>{
        
        console.log(item);

        let div = document.createElement("div")
        div.innerHTML =
        `
        <div class="card card-compact bg-base-100 w-64 shadow-xl border-2">
                        <figure>
                          <div>
                            <img
                            src="${item.image}" class="p-2 rounded-2xl"
                            alt="Shoes" /></div>
                        </figure>

                        <div class="card-body">
                          <h2 class="card-title font-semibold">${item.pet_name}</h2>

                          <div class="flex items-center gap-2">
                            <img src="https://img.icons8.com/?size=24&id=115265&format=png" alt="">
                            <h1 class="font-bold">Breed: ${item.breed ? item.breed : 'No found'}</h1>
                          </div>
                          
                          <div class="flex items-center gap-2">
                            <img src="https://img.icons8.com/?size=24&id=85102&format=png" alt="">
                            <h1 class="font-bold">Birth: ${item.date_of_birth === null ? 'No found' : (item.date_of_birth ? item.date_of_birth : 'Data is not defined')}</h1>
                          </div>

                          <div class="flex items-center gap-2">
                            <i class="fa-solid fa-venus"></i>
                            <h1 class="font-bold">Gender: ${item.gender ? item.gender : "No found"}</h1>
                          </div>
                          <div class="flex items-center gap-2">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <h1 class="font-bold">Price : ${item.price ? item.price : "Price is not found"}$</h1>
                          </div>

                          <hr>


                          <div class="flex items-center justify-center gap-2">
                            <button onclick ="likeImages('${item.image}')" class="border py-3 px-4 rounded-xl">
                                <img src="https://img.icons8.com/?size=32&id=33481&format=png" alt="">
                            </button >
                            <button class="border py-3 px-4 rounded-xl text-color1 font-bold">
                                Adopt
                            </button>
                            <button  onclick="my_modal_1.showModal()"  class="border py-3 px-4 rounded-xl text-color1 font-bold">
                                Details
                            </button>
                          </div>
                          
                        </div>
                      </div>
        
        
        `
        cardContainer.append(div)

    })
}







 
  


const likeImages = (img) =>{
  let div = document.getElementById("inputImg")
  

  let imgSrc = document.createElement("div")

  imgSrc.innerHTML =
  `
  <img src="${img}" alt="" class = " rounded-2xl" />
  
  
  `

  div.append(imgSrc)

}

loadCategories();
loadCard();