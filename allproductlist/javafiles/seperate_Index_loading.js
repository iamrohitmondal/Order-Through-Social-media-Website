function showfirst() {
    return new Promise((resolve) => {
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
            resolve(200);
        }, 1000);
    });
}
function showsecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.querySelectorAll(".container.earring .product").forEach(rohit => {
                rohit.style.display = "flex";
            });
            resolve(200);
        }, 3000)
    })
}
// second batch after 5s
function showthird() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // showElements(secondShow)
            document.querySelectorAll(".container.choker .product").forEach(rohit => {
                rohit.style.display = "flex";
            });
            document.querySelectorAll(".container.necklace .product").forEach(rohit => {
                rohit.style.display = "flex";
            });
            resolve(200)
        }, 3000);
    });
}
// third batch after 7s
function showforth() {
    return new Promise((resolve) => {
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
resolve(200)
        }, 3000);
    })
}
setTimeout(() => {
    setTimeout(() => {
        document.querySelector(".fake-loader").style.display = "none"
    }, 6000)
    document.querySelector(".fake-loader").style.display = "flex"
}, 4000)
async function Showall(){
    await showfirst();
    await showsecond();
    await showthird();
    await showforth();
}
Showall();