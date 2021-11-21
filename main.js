const panels = document.querySelectorAll('.panel')

// Add Event Listener
panels.forEach(panel => {

    panel.addEventListener('click', () => {

        removeActiveClass()

        panel.classList.add('active')
    })
})

//Remove Active Class

function removeActiveClass() {

    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}