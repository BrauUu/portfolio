function getYearsDifference(date) {

    const actualDate = new Date()
    const birthDate = new Date(date)

    const actualDateYear = actualDate.getFullYear()
    const birthDateYear = birthDate.getFullYear()
    const actualDateMonth = actualDate.getMonth()
    const birthDateMonth = birthDate.getMonth()
    const actualDateDay = actualDate.getDay()
    const birthDateDay = birthDate.getDay()

    let age = actualDateYear - birthDateYear

    if (actualDateMonth < birthDateMonth)
        age--
    else if (actualDateMonth == birthDateMonth) {
        if (actualDateDay < birthDateDay)
            age --
    }

    return age
    
}

function scrollToItem(){
    carrouselItens[currentItem].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    })
}

const [leftButton, rightButton] = document.querySelectorAll('.carrousel-button')
const carrouselItens = document.querySelectorAll('.carrousel-item')

let currentItem = 0
const maxItens = carrouselItens.length - 1

leftButton.addEventListener('click', () => {
    if(leftButton.classList.contains("left-arrow")){
        currentItem -= 1
        if(currentItem < 0) {
            currentItem = maxItens
        }
    }
    scrollToItem()
})

rightButton.addEventListener('click', () => {
    if(rightButton.classList.contains("right-arrow")){
        currentItem += 1
        if(currentItem > maxItens) {
            currentItem = 0
        }
    }
    scrollToItem()
})

const ageEl = document.querySelector("#age")
ageEl.textContent = getYearsDifference('2001-04-15')

