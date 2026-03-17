const text = "It's a true bond, not just like others... 💖";

let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}

typeEffect();

function scrollToNext() {
    document.getElementById("section2").scrollIntoView({
        behavior: "smooth"
    });
}

// Scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll('.story-container').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    observer.observe(el);
});

// Lightbox
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Animate special cards
const cards = document.querySelectorAll(".special-card");

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => observer2.observe(card));

const letter = `Divii,

It’s funny how everything started with just a small doubt in a lab…
I never thought that moment would turn into something so meaningful.

From talking through symbols even from a distance…
to spending time together and sharing moments that words still can’t fully describe…
every part of this journey feels special.

You have always supported me, understood me, and made my days better without even trying.
The way you take care of me and help me… it truly means a lot.

We didn’t just become friends…
we started building something real, something that matters.

And honestly…
this is not just timepass, it’s a true bond 💖

Thank you for being you…
Thank you for being in my life.

— Nabanit 💫`;

let j = 0;

function typeLetter() {
    if (j < letter.length) {
        document.getElementById("letter-text").innerHTML += letter.charAt(j);
        j++;
        setTimeout(typeLetter, 25);
    } else {
        startConfetti(); // 🎉 triggers confetti after typing ends
    }
}

// Trigger when section visible
const letterSection = document.querySelector(".letter-section");

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeLetter();
        }
    });
});

observer3.observe(letterSection);


// CONFETTI EFFECT
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 10,
            color: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
            tilt: Math.random() * 10 - 10
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.r, c.r);
    });

    updateConfetti();
}

function updateConfetti() {
    confetti.forEach(c => {
        c.y += Math.cos(c.d) + 2;
        c.x += Math.sin(c.d);

        if (c.y > canvas.height) {
            c.y = -10;
        }
    });
}

function startConfetti() {
    createConfetti();
    setInterval(drawConfetti, 20);
}

// FLOATING HEARTS
const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Generate hearts continuously
setInterval(createHeart, 300);

const messages = [
    "You make everything feel better 💖",
    "Your smile can fix a bad day 😊",
    "You are stronger than you think 💫",
    "You make life more meaningful 🌸",
    "You are truly one of a kind 🌟"
];

let msgIndex = 0;

function showMessage() {
    const msg = document.getElementById("special-message");

    msg.style.opacity = 0;

    setTimeout(() => {
        msg.innerText = messages[msgIndex];
        msg.style.opacity = 1;

        msgIndex = (msgIndex + 1) % messages.length;
    }, 200);
}
const canvas2 = document.getElementById("particles");
const ctx2 = canvas2.getContext("2d");

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * canvas2.width,
        y: Math.random() * canvas2.height,
        r: Math.random() * 2 + 1,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    });
}

function drawParticles() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

    particles.forEach(p => {
        ctx2.beginPath();
        ctx2.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx2.fillStyle = "rgba(255, 182, 193, 0.7)";
        ctx2.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas2.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas2.height) p.dy *= -1;
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();


// ===============================
// 🎬 BIRTHDAY SURPRISE SYSTEM
// ===============================

// STEP 1: INTRO MESSAGE
// STEP 1: START → ROBOT COMES
function startSurprise() {
    document.querySelector(".start-btn").style.display = "none";

    document.getElementById("robot-box").classList.remove("hidden");

    const robotMsg = "Scanning emotions... detecting someone very special 💫";
    let i = 0;

    function typeRobot() {
        if (i < robotMsg.length) {
            document.getElementById("robot-text").innerHTML += robotMsg.charAt(i);
            i++;
            setTimeout(typeRobot, 50);
        } else {
            setTimeout(secondLine, 1500);
        }
    }

    typeRobot();
}

// STEP 2: SECOND LINE (MORE SUSPENSE)
function secondLine() {
    const msg2 = "Analyzing memories... result: someone who makes life beautiful 💖";
    let i = 0;

    function type2() {
        if (i < msg2.length) {
            document.getElementById("robot-text").innerHTML += "<br>" + msg2.charAt(i);
            i++;
            setTimeout(type2, 40);
        } else {
            setTimeout(finalRobot, 1500);
        }
    }

    type2();
}

// STEP 3: FINAL ROBOT LINE
function finalRobot() {
    const msg3 = "Final result... Happy Birthday Divii 🎉";
    let i = 0;

    function type3() {
        if (i < msg3.length) {
            document.getElementById("robot-text").innerHTML += msg3.charAt(i);
            i++;
            setTimeout(type3, 50);
        } else {
            // 🔥 IMPORTANT: CALL FINAL SCREEN
            setTimeout(() => {
                showFinal();
            }, 1500);
        }
    }

    type3();
}

// STEP 2: FINAL MESSAGE
function showFinal() {
    // Hide robot
    document.getElementById("robot-box").classList.add("hidden");

    // Show final section
    document.getElementById("final").classList.remove("hidden");

    // 🎵 Music
    const music = document.getElementById("bg-music");
    if (music) {
        music.volume = 0.5;
        music.play().catch(() => { });
    }

    // 🎉 Effects
    startBirthdayConfetti();
    startContinuousBalloons();

    // 💖 MESSAGE
    const message = `Divii 💖

Aaj ka din sirf ek date nahi hai...
yeh ek special insaan ka din hai ✨

Tumhari smile, tumhari care,
tumhara nature... sab kuch special hai 💫

Tum bina bole bhi samajh jaati ho,
aur bina wajah khush kar deti ho 💖

Sach kahu to...
tum meri life ka ek beautiful part ho 🌸

✨ Happy Birthday Divii ✨`;

    let j = 0;
    const box = document.getElementById("final-message");
    box.innerHTML = ""; // 🔥 clear old text

    function typeFinal() {
        if (j < message.length) {
            box.innerHTML += message.charAt(j);
            j++;
            setTimeout(typeFinal, 30);
        }
    }

    typeFinal();
}
// ===============================
// 🎉 CONFETTI (RENAMED)
// ===============================
const birthdayCanvas = document.getElementById("confetti-canvas");
const birthdayCtx = birthdayCanvas.getContext("2d");

birthdayCanvas.width = window.innerWidth;
birthdayCanvas.height = window.innerHeight;

let birthdayConfetti = [];

function startBirthdayConfetti() {
    for (let i = 0; i < 150; i++) {
        birthdayConfetti.push({
            x: Math.random() * birthdayCanvas.width,
            y: Math.random() * birthdayCanvas.height,
            r: Math.random() * 6,
            d: Math.random() * 10
        });
    }
    setInterval(drawBirthdayConfetti, 20);
}

function drawBirthdayConfetti() {
    birthdayCtx.clearRect(0, 0, birthdayCanvas.width, birthdayCanvas.height);

    birthdayConfetti.forEach(c => {
        birthdayCtx.beginPath();
        birthdayCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        birthdayCtx.fillStyle = "pink";
        birthdayCtx.fill();

        c.y += 2;
        if (c.y > birthdayCanvas.height) c.y = 0;
    });
}

// ===============================
// 🎈 BALLOONS (RENAMED)
// ===============================
let balloonIntervalStarted = false; // prevent multiple intervals

function createSingleBalloon() {
    let b = document.createElement("div");

    b.innerHTML = ["🎈", "💖", "✨", "🎉"][Math.floor(Math.random() * 4)];

    b.style.position = "fixed";
    b.style.left = Math.random() * 100 + "vw";
    b.style.bottom = "-50px";
    b.style.fontSize = (20 + Math.random() * 25) + "px";
    b.style.zIndex = "9999";
    b.style.pointerEvents = "none"; // 🔥 important (no blocking)

    b.style.animation = "rise 6s linear forwards";

    document.body.appendChild(b);

    setTimeout(() => {
        b.remove();
    }, 6000);
}

// START CONTINUOUS FLOW
function startContinuousBalloons() {
    if (balloonIntervalStarted) return; // 🔥 prevents stopping bug

    balloonIntervalStarted = true;

    setInterval(() => {
        createSingleBalloon();
    }, 250); // speed (adjust if needed)
}