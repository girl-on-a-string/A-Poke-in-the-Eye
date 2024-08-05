//section 1
//variables

const mainContentArea = document.getElementById("main");
const animationArea = document.getElementById("animation-area");
const captionArea = document.getElementById("captions");

const toggleBtn = document.getElementById("toggle-settings");
const settingsMenu = document.getElementById("settings-menu");

//section 2
//settings menu

//toggle settings menu onclick

settingsMenu.style.display = "none";

function showSettings () {

    if (settingsMenu.style.display === "none") {
        settingsMenu.style.display = "block";
    } else {
        settingsMenu.style.display = "none";
    }
}

toggleBtn.addEventListener("click", () => {
    showSettings();
});


