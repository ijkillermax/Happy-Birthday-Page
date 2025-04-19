const secretKey = "qxv078amk69h5zfs"; //Secret key for decryption same used in encryption

const params = new URLSearchParams(window.location.search);
const encryptedName = params.get("name");
const wish = document.getElementById("wish");

if (encryptedName) {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedName, secretKey);
    const decryptedName = bytes.toString(CryptoJS.enc.Utf8);
    if (decryptedName) {
      wish.innerText = `Happy Birthday ${decryptedName}!!`;
    } else {
      console.log("Invalid or corrupted name!!");
    }
  }
  catch (e) {
    console.log("Error in decryption of query param name");
  }
}

const revealBtn = document.getElementById("revealBtn");
const createPageBtn = document.getElementById("createPageBtn");

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

// Event listener for surprise button
revealBtn.addEventListener("click", () => {
  // Play surprise sound
  const audio = document.getElementById("surpriseSound");
  if (audio) {
    audio.play();
  }

  // Transition to birthday content
  intro.style.display = "none";
  mainContent.style.display = "flex";
  createPageBtn.style.display = "none";
  launchConfetti();
  createBalloons();
});

// Launch Confetti
function launchConfetti() {
  const duration = 8 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      })
    );
  }, 250);
}

// Balloons Function
function createBalloons() {
  const balloonContainer = document.getElementById("balloons");
  const colors = [
    "#ff8da1",
    "#fcd1d1",
    "#fcbad3",
    "#ffb6b9",
    "#f8a5c2",
    "#ffe0ac",
    "#ffd5ec",
  ];

  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
    balloon.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    balloonContainer.appendChild(balloon);
  }
}