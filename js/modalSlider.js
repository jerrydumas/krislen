// tasks:
//      open modal
//  click thru images
/*
animated image carousel
*/
// collection 1
const modal1 = document.querySelector('.modal1')
const carousel1 = document.querySelector('.carousel1')
const openModalBtn1 = document.querySelector(".openModalBtn1")
const closeModalBtn1 = document.querySelector('.closeModalBtn1')
openModalBtn1.addEventListener('click', () => {
    modal1.style.display = 'flex'
    carousel1.style.display = 'flex'
})

closeModalBtn1.addEventListener('click', () => {
    modal1.style.display = 'none'
    carousel1.style.display = 'none'
})

// collection 2
const modal2 = document.querySelector('.modal2')
const carousel2 = document.querySelector('.carousel2')
const openModalBtn2 = document.querySelector(".openModalBtn2")
const closeModalBtn2 = document.querySelector('.closeModalBtn2')
openModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'flex'
    carousel2.style.display = 'flex'
})

closeModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'none'
    carousel2.style.display = 'none'
})

// collection 3
const modal3 = document.querySelector('.modal3')
const carousel3 = document.querySelector('.carousel3')
const openModalBtn3 = document.querySelector(".openModalBtn3")
const closeModalBtn3 = document.querySelector('.closeModalBtn3')

openModalBtn3.addEventListener('click', () => {
    modal3.style.display = 'flex'
    carousel3.style.display = 'flex'
})

closeModalBtn3.addEventListener('click', () => {
    modal3.style.display = 'none'
    carousel3.style.display = 'none'
})

//carousel buttons
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})