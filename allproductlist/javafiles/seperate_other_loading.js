setTimeout(() => {
    // showElements(firstShow);
    document.querySelector(".footer").style.display = "grid";

}, 3000);
setTimeout(() => {
    document.querySelectorAll(".container.earring .product").forEach(rohit => {
        rohit.style.display = "flex";
    });
    document.querySelectorAll(".container.choker .product").forEach(rohit => {
        rohit.style.display = "flex";
    });
    document.querySelectorAll(".container.necklace .product").forEach(rohit => {
        rohit.style.display = "flex";
    });
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

}, 4000);
