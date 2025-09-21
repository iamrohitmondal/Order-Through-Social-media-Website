let classes = '.nav,.product,#darktheme,#lighttheme,.price,.product--name , .product p, .order-btn, .product img';
let ontheway = document.querySelectorAll(classes);

function makeScreenDark() {
    document.body.classList.add('dark')
    ontheway.forEach((e) => {
        e.classList.add("dark")
    })
};
function makeScreenLight() {
    document.body.classList.remove('dark')
    ontheway.forEach((e) => {
        e.classList.remove("dark")
    })
};
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

mediaQuery.addEventListener('change', e1 => {
    if (e1.matches) {
        makeScreenDark()

    } else {
        makeScreenLight()

    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    
    makeScreenDark()

} else {
    
    makeScreenLight()

}
