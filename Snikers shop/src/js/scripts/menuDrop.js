export const menuDrop = (opacity1, opacity2, opacity3, catalog_btn, cards3) => {
    opacity1.classList.toggle("catalog__opacity1-hidden")
    opacity2.classList.toggle("catalog__opacity2-hidden")
    opacity3.classList.toggle("catalog__opacity3-hidden")
    if (cards3.classList.contains("show")) {
        cards3.classList.remove("show");
        setTimeout(() => {
            cards3.style.opacity = "0";
        }, 50)
    } else {
        cards3.classList.add("show")
        setTimeout(() => {
            cards3.style.opacity = "1";
        }, 50)
    }
    catalog_btn.classList.toggle("catalog__btn__see_all-active")
    if(catalog_btn.classList.contains('catalog__btn__see_all-active')) {
        catalog_btn.innerHTML = "CLOSE"
    } else {
        catalog_btn.innerHTML = "SEE ALL"
    }
}