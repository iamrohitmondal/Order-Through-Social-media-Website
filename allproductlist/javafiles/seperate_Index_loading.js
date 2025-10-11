setTimeout(() => {
    // showElements(firstShow);
    document.querySelector(".catagoryopening-image").style.display = "flex";
    document.querySelectorAll(".headertitle").forEach(element => {
        element.style.display = "flex";
    });
    document.querySelectorAll(".header-back").forEach(element1 => {
        element1.style.display = "flex";
    })
    document.querySelector(".footer").style.display = "grid";

}, 3000);
setTimeout(() => {
    document.querySelectorAll(".container.earring .product").forEach(rohit => {
        rohit.style.display = "flex";
    });
}, 6000)
// second batch after 5s
setTimeout(() => {
    // showElements(secondShow);


    document.querySelectorAll(".container.choker .product").forEach(rohit => {
        rohit.style.display = "flex";
    });
    document.querySelectorAll(".container.necklace .product").forEach(rohit => {
        rohit.style.display = "flex";
    });
}, 7000);

// third batch after 7s
setTimeout(() => {
    // showElements(thirdShow);
    document.querySelectorAll(".container.bangles .product").forEach(rohit2 => {
        rohit2.style.display = "flex";
    });
    document.querySelectorAll(".container.ring .product").forEach(rohit3 => {
        rohit3.style.display = "flex";
    });
    document.querySelectorAll(".container.jhumka .product").forEach(rohit4 => {
        rohit4.style.display = "flex";
    });
    document.querySelectorAll(".container.armlets .product").forEach(rohit5 => {
        rohit5.style.display = "flex";
    });

}, 10000);
 
setTimeout(()=>{
    setTimeout(()=>{
document.querySelector(".fake-loader").style.display="none"
    },6000)
    document.querySelector(".fake-loader").style.display="flex"
},4000)