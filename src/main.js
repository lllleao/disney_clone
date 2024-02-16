document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            
            hidingBorderButtons()
            hidingTabs()
            aba.classList.add('shows__list--is-active')
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

})

function hidingBorderButtons() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hidingTabs() {
    const tabContainer = document.querySelectorAll('[data-tab-id]')
    
    for(let i = 0; i < tabContainer.length; i++) {
        tabContainer[i].classList.remove('shows__list--is-active')
    }
}