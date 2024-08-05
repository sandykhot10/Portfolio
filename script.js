// script.js
document.addEventListener('DOMContentLoaded', function() {
    const headings = [
        "Web Developer !",
        "Problem Solver ",
        "Video Editor !",
        "Tech Entusiastic "
    ];
    
    let currentIndex = 0;
    const headingElement = document.getElementById('portfolio-heading');
    let charIndex = 0;
    let currentHeading = headings[currentIndex];

    function typeHeading() {
        if (charIndex < currentHeading.length) {
            headingElement.textContent += currentHeading.charAt(charIndex);
            charIndex++;
            setTimeout(typeHeading, 150); // Adjust typing speed here
        } else {
            setTimeout(changeHeading, 2000); // Adjust delay before next heading
        }
    }

    function changeHeading() {
        currentIndex = (currentIndex + 1) % headings.length;
        currentHeading = headings[currentIndex];
        charIndex = 0;
        headingElement.textContent = '';
        typeHeading();
    }

    // Start typing the first heading
    typeHeading();
});
