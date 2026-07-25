alert("Welcome to Kiran's Portfolio!");
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});
// Welcome message
console.log("Welcome to Kiran's Portfolio!");

// Explore button
const exploreBtn = document.querySelector(".btn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        alert("Welcome to my portfolio!");
    });
}
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});