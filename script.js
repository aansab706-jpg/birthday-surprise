let correctPassword = "muqsam86";

let messages = [
    "💖 Happy Birthday Muqadas Ibtasam 💖",
    "From the moment you came into my life...",
    "Everything became more beautiful...",
    "Even miles apart, you are always in my heart...",
    "You are my peace, my happiness, my everything...",
    "And today, I just want to say...",
    "I LOVE YOU ❤️"
];

let index = 0;

function startApp() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function checkPassword() {
    let input = document.getElementById("password").value;

    if (input === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("main").style.display = "block";

        let music = document.getElementById("bgMusic");
        let voice = document.getElementById("voiceMessage");

        // start music softly
        music.volume = 0.2;
        music.play();

        // play voice after 2 sec
        setTimeout(() => {
            music.pause();
            voice.play();
        }, 2000);

        // resume music after voice
        voice.onended = function () {
            music.play();
        };

        showMessage();
        startHearts();

    } else {
        document.getElementById("error").innerText = "Wrong code 💔";
    }
}

// typewriter effect
function typeWriter(text, i = 0) {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 40);
    }
}

function showMessage() {
    document.getElementById("message").innerHTML = "";
    typeWriter(messages[index]);
}

function nextMessage() {
    index++;
    if (index < messages.length) {
        showMessage();
    } else {
        document.getElementById("main").style.display = "none";
        document.getElementById("final").style.display = "block";
    }
}

// hearts
function startHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 20) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}
function showLetter() {
    document.getElementById("letter").style.display = "block";
}
