// Nav Burger
let navBurger = document.querySelector('.nav-burger'),
  navMenu = document.querySelector('.nav-menu')

navBurger.addEventListener('click', function () {
  this.classList.toggle('active')
  navMenu.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) {
    navBurger.classList.remove('active')
    navMenu.classList.remove('active')
  }
})
// Nav Burger

// Language Button
let changeLangBtn = document.querySelectorAll('.nav__lang')

for (let i = 0; i < changeLangBtn.length; i++) {
  changeLangBtn[i].addEventListener('click', function () {
    if (this.innerText === 'EN') {
      this.innerHTML = '<span class="nav__lang-span"><i class="fas fa-globe nav__lang-icon"></i></span> RU'
    } else if (this.innerText === 'RU') {
      this.innerHTML = '<span class="nav__lang-span"><i class="fas fa-globe nav__lang-icon"></i></span> EN'
    }
  })
}
// Language Button