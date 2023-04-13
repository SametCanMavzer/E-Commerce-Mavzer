let favorite = localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [];



function displayFavoriProduct() {
    const favoriWrapper = document.querySelector(".favorite-wrapper");
    let result = "";

    favorite.forEach((item) => {

        result += `

       
            <div class="favorite-item">
    
            <img src=${item.img.singleImage} class="favorite-picture" alt="">
            <div class="favorite-info">
                <h4>${item.name}</h4>
                <span class="favorite-sku">SKU: PD0016</span>
    
            </div>
            <div class="favorite-price">
                <span class="favorite-price-item">$${item.price.newPrice.toFixed(2)}</span>
            </div>
            <div class="favorite-action">
                <button class="product-link" data-id=${item.id}>
                    <i class="bi bi-eye"></i>
                </button>
                <button class="delete-favorite" data-id=${item.id}>
                    <i class="bi bi-trash3"></i>
                </button>
    
            </div>
    
        </div>
        
                    `;


    });

    favoriWrapper.innerHTML = result;
    removeFavoriItem();
}

displayFavoriProduct();


function removeFavoriItem() {
    const btnDeleteFavori = document.querySelectorAll(".delete-favorite");
    const heartItems = document.querySelector(".bi-heart-fill");
    const favoriTitle = document.querySelector(".favorite-title");
    const favoriTitleEmoji = document.querySelector(".favorite-header i");

    btnDeleteFavori.forEach((button) => {
        button.addEventListener("click", function (e) {
            const id = e.target.dataset.id;
            favorite = favorite.filter((item) => item.id !== Number(id));
            displayFavoriProduct();
            localStorage.setItem("favorite", JSON.stringify(favorite));
            if (JSON.parse(localStorage.getItem("products").includes(JSON.parse(localStorage.getItem("favorite"))))) {
                heartItems.style.color = "black";
                heartItems.setAttribute("class", "bi bi-heart");
                favoriTitle.textContent = "Your favorite list is now empty ";
                favoriTitleEmoji.setAttribute("class", "bi bi-emoji-neutral");

            }
        });

    });
};
