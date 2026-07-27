// Message in browser console
console.log("Portfolio Website Loaded Successfully");
const starsContainer = document.querySelector(".stars");

const numberOfStars = 250;

for(let i = 0; i < numberOfStars; i++){

    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    starsContainer.appendChild(star);

    animateStar(star);
}

function animateStar(star){

    let x = parseFloat(star.style.left);
    let y = parseFloat(star.style.top);

    const speed = Math.random() * 0.25 + 0.05;

    function move(){

        y += speed;

        if(y > window.innerHeight){
            y = -10;
            x = Math.random() * window.innerWidth;
        }

        star.style.top = y + "px";
        star.style.left = x + "px";

        requestAnimationFrame(move);
    }

    move();
}