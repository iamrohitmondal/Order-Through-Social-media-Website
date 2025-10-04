let catagoryClasses = '.catagorybody,.catagorythemechanger,.seperate,.catagory-container,.externalpanel,.cardboard,#catagory-darktheme,#catagory-lighttheme';
// let ontheway = document.querySelectorAll(catagoryClasses);

function makecatagoryScreenDark() {
    // document.body.classList.add('dark')
    document.querySelectorAll(catagoryClasses).forEach((e) => {
        e.classList.add("darker")
    })
};
function makecatagoryScreenLight() {
    // document.body.classList.remove('dark')
    document.querySelectorAll(catagoryClasses).forEach((e) => {
        e.classList.remove("darker")
    })
};
const catagorymediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

catagorymediaQuery.addEventListener('change', e1 => {
    if (e1.matches) {
        makecatagoryScreenDark()

    } else {
        makecatagoryScreenLight()

    }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    
    makecatagoryScreenDark()

} else {
    
    makecatagoryScreenLight()

}