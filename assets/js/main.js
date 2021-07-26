/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu= document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click' ,()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll('[data-target]'),
     tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target =document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})
/*==================== COURSES MODAL ====================*/
const modalViews=document.querySelectorAll('.courses__modal'),
      modalBtns =document.querySelectorAll('.courses__button'),
      modalCloses =document.querySelectorAll('.courses__modal-close')

let modal = function(modalclick){
    modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click' , ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click' ,() =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})



/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrolly = window.pageyOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrolly > sectionTop && scrolly <= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')

        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll' ,scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // when the scroll is greater then 200 viewport height
    if(this.scrolly >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrolly >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollup)
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme = 'uil-sun'

//previously selected topic(if customer/user selcted)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current  theme that the interface has by validating the datk-theme

const getCurrentTheme= () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon= () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the customer previously choose topic
 if(selectedTheme){
     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
     themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
 }

 //Active /deactivate the theme manually with the button 

 themeButton.addEventListener('click' , ()=>{
     //add or remove the dark/icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        // we save the theme and current icon 
        localStorage.setItem('selected-theme' , getCurrentTheme())
        localStorage.setItem('selected-icon' , getCurrentIcon())
 })