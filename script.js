const nextBtn = document.querySelector('[data-btn="next"]')
const prevBtn = document.querySelector('[data-btn="prev"]')
let currentIndex = 0

nextBtn.onclick = function () {
    currentIndex ++
    prevBtn.disabled = false
    if (currentIndex === items.length -1 ) nextBtn.disabled = true
    updateStatus(currentIndex)
}

prevBtn.onclick = function () {
    currentIndex --
    nextBtn.disabled = false
    if (currentIndex === 0 ) prevBtn.disabled = true
    updateStatus(currentIndex)
}

const items = document.querySelectorAll('.item')
function updateStatus (index) {
    items.forEach(item => {
        item.classList.remove('active')
    })
    for (let i = 0; i <= index; i++) {
        items[i].classList.add('active')
    }
}