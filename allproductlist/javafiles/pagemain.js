let sellerNumber = ""; // Replace with your WhatsApp number (without + or spaces)

fetch("javafiles/slnum.json")
    .then(res => res.json())
    .then(data => {
        sellerNumber = data.sellerNumber;
    });



function orderNow(productName, price, productImage) {
    const message = `Hello, I am interested in ordering the following product:\n\n` +
        ` *Product:* ${productName}\n` +
        ` *Price:* ${price}\n` +
        ` *Image Link:* ${productImage}\n\n` +
        `Please let me know the next steps.`;
    const url = `https://wa.me/${sellerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
function openYoutube() {
    window.location.assign('https://youtube.com/@tmcreation-u9j?si=mO4TxLbtUxShor93')
}
function catagoryopen() {
    // document.querySelector(".catagoryopening-image").style.display = "none"
    document.querySelector(".open-catagory").style.display = "flex"
    setTimeout(() => {
        document.querySelector(".open-catagory").classList.add("show");
    }, 500);
}
function catagoryclose() {
    document.querySelector(".open-catagory").style.display = "none"
    // document.querySelector(".catagoryopening-image").style.display = "flex"
}
function redirectTo(page) {
    window.location.href = page;
};
const arrowTop = document.getElementById('arrow-top');
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        arrowTop.style.display = "flex"
    } else {
        arrowTop.style.display = "none"
    }
})