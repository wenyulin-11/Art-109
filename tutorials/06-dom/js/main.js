// console.log("javascript")


//selcet html element
const header = document.querySelector("#header");
const changehaederbutton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

//change header with button click
changehaederbutton.addEventListener("click", () => {
    header.innerHTML= "pow!!";
});


//toggle color theme


//create function for changing button text
function changeButtonText() {
    if (document.body.classList.contains("dark")) {
        changeThemeButton.innerHTML = "Switch to light theme";
    } else {
        changeThemeButton.innerHTML = "Switch to dark theme";
    }
}
//click event on button
changeThemeButton.addEventListener("click", () => {
    //add/remove dark class to body
document.body.classList.toggle("dark");
changeButtonText();
})

