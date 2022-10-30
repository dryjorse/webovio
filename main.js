function Burger () {
    document.querySelector('.menu').classList.toggle('open-menu')
}

document.querySelector('.menu-btn').addEventListener('click', Burger)
document.querySelector('.close-menu').addEventListener('click', Burger)