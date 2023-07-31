console.log('Hello from Nerdbord!')

let colors = ["blue", "green", "orange", "yellow"];
let i = 0;

function changeColor()
{
    document.querySelector(".box").style.borderColor = colors[i];
    i = (i + 1) % colors.length;
}

setInterval(changeColor, 3000);