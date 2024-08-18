function toggleMenu() {
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".ham-bar");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}