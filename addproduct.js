function createProduct(productImg, productNo, productNames, productPrice, productDescription,) {

    let html = `<div class="product">
            <img src="${productImg}?text=${productNames}" alt="Product ${productNo}"
                onclick="openLightbox(this.src)">

            <!-- PRODUCT DESCRIPTION -->
            <div class="product--name">${productNames}</div>
            <p><span class="price">&#8377;${productPrice}</span> - ${productDescription}</p>
            <!-- PRODUCT DESCRIPTION -->

            <a href="#" class="order-btn"
                onclick="orderNow('${productNames}','&#8377;${productPrice}', '${productImg}?${productNames}')">
                <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </a>
        </div>`

   return document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
createProduct("https://i.ibb.co/3YCSJ5bh/Shubh-Kalash.webp", "6", "ShubhKalash", "50", "Add a touch of tradition and elegance to your home with these beautifully handcrafted decorative pieces.")
//             product photo link ,                  product no , product name , price , description
//Called the Function to add a new product in product list