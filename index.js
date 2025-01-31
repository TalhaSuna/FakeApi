const url = 'https://fakestoreapi.com/products';
        const buton = document.querySelector(".buton"); 
        const container = document.querySelector('.container');
        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("modal-img");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
        const modalPrice = document.getElementById("modal-price");
        const closeModal = document.querySelector(".close");

        buton.addEventListener("click", async function () {
            try {
                const response = await fetch(url);
                const data = await response.json();
                container.innerHTML = "";

                for(let i=0; i<20; i++){
                    const smallDiv = document.createElement('div');
                    const img = document.createElement('img');
                    const aciklama = document.createElement('h5');
                    const fiyat = document.createElement('p');
                    const icbuton = document.createElement('button');
                    const aciklamaDiv = document.createElement('div');
                    const fiyatDiv = document.createElement('div');

                    icbuton.textContent = 'Sepete Ekle';
                    icbuton.classList.add('icbuton');
                    smallDiv.classList.add('smallDiv');
                    img.src = data[i].image; 
                    img.alt = data[i].title; 
                    aciklama.textContent= data[i].title;
                    aciklamaDiv.appendChild(aciklama);
                    aciklamaDiv.classList.add('aciklamaDiv');
                    fiyat.textContent = data[i].price+'$';
                    fiyatDiv.appendChild(fiyat);
                    fiyatDiv.classList.add('fiyatDiv');
                    smallDiv.appendChild(img);
                    smallDiv.appendChild(aciklamaDiv);
                    smallDiv.appendChild(fiyatDiv);
                    smallDiv.appendChild(icbuton);
                    container.appendChild(smallDiv);
                    
                    smallDiv.addEventListener("click", function() {
                        modal.style.display = "flex";
                        modalImg.src = data[i].image;
                        modalTitle.textContent = data[i].title;
                        modalDescription.textContent = data[i].description;
                        modalPrice.textContent = data[i].price + '$';
                    });
                } 
            } catch (error) {
                console.error("Fotoğraf alınırken hata oluştu:", error);
            }
        });

        closeModal.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });