// Llamamos a nuestros elementos del documento que tienen id
const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");
const navbar = document.querySelector("#navbar");

//EVENTO QUE MUESTRA LA navbar AGREGANDO LA CLASE visible-navbar: ABRIMOS MENU
openButton.addEventListener("click", () => {
    navbar.classList.add("visible-navbar");
})

//EVENTO QUE OCULTA LA navbar QUITANDO LA CLASE visible-navbar: CERRAMOS MENU
closeButton.addEventListener("click", () => {
    navbar.classList.remove("visible-navbar");
})