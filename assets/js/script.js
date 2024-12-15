const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.navbar')

// DROPDOWN MENU

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('on')
}