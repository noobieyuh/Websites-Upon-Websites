var sound = new Audio("sparkle.mp3");
var backgroundMusic = new Audio("background.mp3");

function addWebsite()
{
    const newFrame = document.createElement("iframe");
    newFrame.src = 'index.html';
    newFrame.height = 1080;
    newFrame.width = 1920;
    document.body.appendChild(newFrame);
}

var amount = 0;

function counter()
{
    amount++;
    document.getElementById("numCount").innerHTML = amount;
}

function playMusic()
{
    backgroundMusic.play();
}

function newWebsiteSound()
{
    sound.play();
}