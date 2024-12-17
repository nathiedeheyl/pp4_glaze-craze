const toggleBtn = document.querySelector('.toggle-btn')
const dropDownMenu = document.querySelector('.navbar')

// DROPDOWN MENU
toggleBtn.addEventListener("click", () => {
    if (dropDownMenu.classList.contains("off")) {
        // enable toggle down menu
        dropDownMenu.classList.remove("off")
        dropDownMenu.classList.add("on");
    } else {
        // disable transition for toggle down menu
        dropDownMenu.classList.remove("on")
        dropDownMenu.classList.add("off");
    };
});