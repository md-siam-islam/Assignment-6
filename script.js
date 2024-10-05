const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then (res => res.json())
    .then (data => displayCategories(data.categories))
    .catch(error => console.log(error));

}

const displayCategories = (data) =>{
    let container = document.getElementById("btn-container")
    
    data.forEach ((item) => {
        console.log(item);

        let buttonContent = document.createElement("div");

        buttonContent.innerHTML = `
        
        <button class="border-2 py-4 px-14 rounded-3xl flex items-center justify-center">
                    <div class="w-10 h-10">
                        <img src="${item.category_icon}" alt="" class="w-full h-full">
                    </div>

                    <h1 class="text-xl font-bold">${item.category}</h1>
        </button>
        
        
        `
        container.append(buttonContent); 
    })

    

}

loadCategories();