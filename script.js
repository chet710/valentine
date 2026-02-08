const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let escapeSpeed = 1;

// Move "No" button
function moveNoButton() {
  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX * escapeSpeed;
  const y = Math.random() * maxY * escapeSpeed;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  escapeSpeed += 0.15;

  const texts = [
    "No 💔",
    "Are you sure? 😅",
    "Think again 😏",
    "Nice try 😈",
    "You can’t 😜"
  ];
  noBtn.innerText = texts[Math.floor(Math.random() * texts.length)];
}

// Desktop & Mobile
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES click
yesBtn.addEventListener("click", () => {
  // Confetti
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });

  confetti({
    particleCount: 150,
    angle: 60,
    spread: 70,
    origin: { x: 0 }
  });

  confetti({
    particleCount: 150,
    angle: 120,
    spread: 70,
    origin: { x: 1 }
  });

  // Final screen
  setTimeout(() => {
    document.body.innerHTML = `
      <div class="final">
        <h1>YAYYYY 💖🥰</h1>
        <p>You just made me the happiest person alive.</p>
      </div>
    `;
  }, 500);
});

// Floating hearts (FIXED)
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = "24px";
  heart.style.animation = "floatUp 5s linear";
  heart.style.pointerEvents = "none"; // ⭐ CRITICAL FIX ⭐
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 700);
