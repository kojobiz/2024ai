
console.log("hey");

document.addEventListener("DOMContentLoaded", function() {
    // ここに JavaScript のコードを記述
    const mf = document.getElementById("mobile_feature");
    if (window.innerWidth <= 769) {
        mf.style.display = "block";
    }
});