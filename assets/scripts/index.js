const [leftButton, rightButton] = document.querySelectorAll('.carrousel-button')
const carrouselItens = document.querySelectorAll('.carrousel-item')
let currentItem = 0
const maxItens = carrouselItens.length - 1

function scrollToItem(){
    carrouselItens[currentItem].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    })
}

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
            age--
    }

    return age
    
}

const [nameInput, emailInput, messageInput] = document.querySelectorAll("#form > .field > .input")
const form = document.querySelector("#form")

nameInput.addEventListener('blur' , () => {
    validateLenght(nameInput)
})

emailInput.addEventListener('blur' , () => {
    validateLenght(emailInput)
    validateEmail(emailInput)
})

messageInput.addEventListener('blur' , () => {
    validateLenght(messageInput)
})

form.addEventListener("submit", (event) => {
    validateSubmit(event)
})

function validateSubmit(event){
    let error = false
    if(!validateLenght(nameInput))
        error = true
    if(!validateLenght(emailInput) || !validateEmail(emailInput))
        error = true
    if(!validateLenght(messageInput))
        error = true

    if(error)
        event.preventDefault();
    
}

function validateLenght(field) {
    const help_text = document.querySelector(`.${field.name.concat('_help')}`)
    const fieldLength = field.value.length
    const min = field.getAttribute('min')
    const max = field.getAttribute('max')

    if (fieldLength == 0){
        help_text.textContent = "Campo obrigatório!"
        field.classList.add("invalid-input")
        return false
    } else {
        if(fieldLength < min){
            help_text.textContent = `Valor mínimo de ${min} caracteres!`
            field.classList.add("invalid-input")
            return false
        }
        else if(fieldLength > max) {
            help_text.textContent = `Valor máximo de ${max} caracteres!`
            field.classList.add("invalid-input")
            return false
        }
        help_text.textContent = ""
        field.classList.remove("invalid-input")
        return true   
    }
}

function validateEmail(field) {
    const help_text = document.querySelector(`.${field.name.concat('_help')}`)

    if (field.value.length > 0 ){
        if (field.validity.typeMismatch) {
            help_text.textContent = "E-mail inválido!"
            field.classList.add("invalid-input")
            return false
        } else {
            help_text.textContent = ""
            field.classList.remove("invalid-input")
            return true
        }
    }
}

const ageEl = document.querySelector("#age")
ageEl.textContent = getYearsDifference('2001-04-15')

