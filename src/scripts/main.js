document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const faqwQuestion = document.getElementsByClassName('faq__questions__item__question')
    const sectionHero = document.querySelector('.hero')
    const header = document.querySelector('header')

    window.addEventListener('scroll', function() {
        const positionScroll = window.scrollY
        const positionMenu = sectionHero.clientHeight

        if (positionScroll <= positionMenu) {
            header.classList.add('header--is-hidden')
        } else {
            header.classList.remove('header--is-hidden')
        }
    })

    //Seção faq
    for (let i = 0; i < faqwQuestion.length; i++) {
        faqwQuestion[i].addEventListener('click', function abrirOuFechar(elemento) {
            const elementoPai = elemento.target.parentNode
            elementoPai.classList.toggle('faq__questions__item--is-open')
        })
    }
    

    //Seção de atrações, programação das abas
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