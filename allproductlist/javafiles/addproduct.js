const catagory=["choker", "necklace", "earring", "bangles", "jhumka", "ring", "armlets"]
const productToAdd = [
    {
        productClass: "choker",
        productImg: "https://i.ibb.co/Nc5bSW7/Choker.webp",
        productNames: "Choker 1",
        productNo: 1,
        productPrice: 149,
        productDescription: "A short necklace designed to fit snugly around the neck, typically made from a variety of materials like velvet, lace, metal, or beads, and can range from simple bands to ornate, jewel-encrusted pieces."
    },
    {
        productClass: "choker",
        productImg: "https://i.ibb.co/TDQv26KR/Choker2.webp",
        productNames: "Choker 2",
        productNo: 2,
        productPrice: 149,
        productDescription: "A short necklace designed to fit snugly around the neck, typically made from a variety of materials like velvet, lace, metal, or beads, and can range from simple bands to ornate, jewel-encrusted pieces."
    },
    {
        productClass: "necklace",
        productImg: "https://i.ibb.co/xZRDyNG/Long-Necklace.webp",
        productNames: "Long-Necklace 1",
        productNo: 3,
        productPrice: 149,
        productDescription: "An ornament worn around the neck, commonly a chain of metal, string, beads, or gems, used for adornment or as a symbol of status."
    },
    {
        productClass: "necklace",
        productImg: "https://i.ibb.co/vxz6st27/Long-Necklace-2.webp",
        productNames: "Long-Necklace 2",
        productNo: 4,
        productPrice: 149,
        productDescription: "An ornament worn around the neck, commonly a chain of metal, string, beads, or gems, used for adornment or as a symbol of status."
    },
    {
        productClass: "bangles",
        productImg: "https://i.ibb.co/zT681VKH/Bangles.webp",
        productNames: "Bangles",
        productNo: 5,
        productPrice: 149,
        productDescription: "Bangles decorated with cloth are vibrant, handcrafted accessories featuring detailed embroidery, mirror work, or printed designs on fabric like cotton or silk. They offer a traditional, festive look distinct from metal jewelry."
    },
    {
        productClass: "earring",
        productImg: "https://i.ibb.co/3YCSJ5bh/Shubh-Kalash.webp",
        productNames: "ShubhKalash",
        productNo: 6,
        productPrice: 49,
        productDescription: "Add a touch of tradition and elegance to your home with these beautifully handcrafted decorative pieces. Made with natural cowrie shells, vibrant red fabric, and jute detailing, these items are perfect for wall, door, or festival decorations. The floral-inspired design with neatly arranged shells brings out a rustic yet classy charm, making them ideal for traditional ceremonies, pooja decorations, or simply enhancing the ethnic vibe of your space."
    },
    {
        productClass: "earring",
        productImg: "https://i.ibb.co/HTWjWzY8/Whats-App-Image-2025-09-16-at-01-57-22-3c7b4106.jpg",
        productNames: "Black Fabric Earring",
        productNo: 7,
        productPrice: 54,
        productDescription: "An accessory, article, or detail used to beautify the appearance of something to which it is added or of which it is a part."
    },
    {
        productClass: "ring",
        productImg: "https://i.ibb.co/LXgW9CQV/Whats-App-Image-2025-09-16-at-01-58-04-b493cca5.jpg",
        productNames: "Fabric Finger ring",
        productNo: 8,
        productPrice: 79,
        productDescription: "An accessory, article, or detail used to beautify the appearance of something to which it is added or of which it is a part."
    },
    {
        productClass: "earring",
        productImg: "https://i.ibb.co/x8qBb8KZ/Whats-App-Image-2025-09-16-at-01-58-57-4c0e1204.jpg",
        productNames: "Fabric Earring",
        productNo: 9,
        productPrice: 49,
        productDescription: "An accessory, article, or detail used to beautify the appearance of something to which it is added or of which it is a part."
    },

    //demo
    {
        productClass: "jhumka",
        productImg: "",
        productNames: "No Product Listed",
        productPrice: "",
        productDescription: ""
    },
    
    {
        productClass: "armlets",
        productImg: "",
        productNames: "No Product Listed",
        productPrice: "",
        productDescription: ""
    }

    //add here
]

let html = productToAdd.map(e => {
    return `<div class="product">
            <img src="${e.productImg}?text=${e.productNames}" alt="Product ${e.productNo}"
                onclick="openLightbox(this.src)">

            <!-- PRODUCT DESCRIPTION -->
        <span class="description-of-product">
            <div class="product--name">${e.productNames}</div>
            <p><span class="price">&#8377;${e.productPrice}</span> - ${e.productDescription}</p>
            <!-- PRODUCT DESCRIPTION -->

            <a href="#" class="order-btn"
                onclick="orderNow('${e.productNames}','&#8377;${e.productPrice}', '${e.productImg}?${e.productNames}')">
                <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </a>
        </span>
        </div>`
});

function createProduct() {
    productToAdd.forEach((e1, index) => {
        const useclass = document.querySelector(`.container.${e1.productClass}`);
        const allProductlist = document.querySelector(".container.allproduct");
        if (useclass) {
            useclass.innerHTML += html[index];
        }else {
           return;
        }

        if (allProductlist) {
            allProductlist.innerHTML += html[index];
        } else {
            return;
        }
    });


}
createProduct()
// function emptydiv(){
    
//   catagory.forEach(cat => {
//         const fotuner = document.querySelector(`.container.${cat}`);

//         if (!fotuner) {
//             console.warn(`⚠️ Container .container.${cat} not found`);
//             return; // skip if container missing
//         }

//         if (fotuner.innerHTML.trim() === "") {
//             // Only show empty message when there are no products
//             const emptyDiv = document.createElement("div");
//             emptyDiv.className = "empty-message";
//             emptyDiv.textContent = "No products available in this category.";

//             Object.assign(emptyDiv.style, {
//                 width: "10em",
//                 height: "7em",
//                 backgroundColor: "grey",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: "8px",
//                 color: "white",
//                 fontWeight: "bold",
//                 margin: "10px auto"
//             });

//             fotuner.appendChild(emptyDiv);
//             console.log(`✅ Added empty message for ${cat}`);
//         } else {
//             console.log(`ℹ️ ${cat} already has products, skipping empty message.`);
//         }
//     });
// }
// Run after DOM loads
// emptydiv()