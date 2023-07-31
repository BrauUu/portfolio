
const BARS = document.querySelectorAll('.progressbar')

for(el of BARS){
    let percentage = el.getAttribute('fill') || 0
    let div = document.createElement('div')
    div.className = 'progressbar-active'
    div.style.width = `${percentage}%`
    el.append(div)
}