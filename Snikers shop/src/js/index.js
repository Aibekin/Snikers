import { menuDrop } from "./scripts/menuDrop.js"

const catalog_btn = document.querySelector(".catalog__btn__see_all")
const opacity1 = document.querySelector(".catalog__opacity1")
const opacity2 = document.querySelector(".catalog__opacity2")
const opacity3 = document.querySelector(".catalog__opacity3")
const cards3 = document.getElementById("catalog__cards3")

catalog_btn.onclick = () =>  menuDrop(opacity1, opacity2, opacity3, catalog_btn, cards3)