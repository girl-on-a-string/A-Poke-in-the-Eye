//section 1
//variables

const toggleBtn = document.getElementById("toggle-settings");
const settingsMenu = document.getElementById("settings-menu");

//section 2
//settings menu

//toggle settings menu onclick

settingsMenu.style.display = "none";

toggleBtn.addEventListener("click", () => {
    settingsMenu.style.display = "block";
});
