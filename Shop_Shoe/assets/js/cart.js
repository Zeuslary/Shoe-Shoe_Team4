import { fillAddress } from "../../controller/addressControler.js";


// Tricks
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalContainer = $(".modal-container");
const modal = $(".modal");
const btnClose = $(".js-modal__btn--close");
const btnBack = $(".js-card__btn--back");
const btnBuy = $(".js-card__btn--buy");
const btnCancel = $(".js-cart__btn--cancel");
const btnConfirm = $(".js-cart__btn--confirm");



function init() {
    // Event onclick for cart and modal
    btnBuy.onclick = () => modalContainer.classList.toggle("show");
    btnClose.onclick = () => modalContainer.classList.toggle("show");
    btnCancel.onclick = () => modalContainer.classList.toggle("show");
    modalContainer.onclick = () => modalContainer.classList.toggle("show");
    modal.onclick = (e) => e.stopPropagation();
    
    // Handle address
    fillAddress();

}

init();
