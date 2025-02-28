document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const words = ["Java Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    
    function typeEffect() {
        if (letterIndex < words[wordIndex].length) {
            currentWord += words[wordIndex][letterIndex];
            textElement.innerHTML = currentWord;
            letterIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1000);
        }
    }

    function eraseEffect() {
        if (letterIndex > 0) {
            currentWord = currentWord.slice(0, -1);
            textElement.innerHTML = currentWord;
            letterIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});