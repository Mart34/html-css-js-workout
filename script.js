console.log('Hello from Nerdbord!')

function changeColor()
{
    setInterval(console.log, 3000);
    document.getElementById(".box").style.color = "blue", "green", "yellow", "orange";
}