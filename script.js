// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

const songs = [
    "No Body European Tour Intro",
    "A Marrow Escape",
    "The Final Pulse",
    "Shadow Over the Stage",
    "Encore: Lights Out"
  ];
  
  function generateSetlist() {
    const shuffledSongs = songs.sort(() => Math.random() - 0.5);
  
    // This line updates the webpage by adding new HTML content using JavaScript.
    // Think of it like telling JavaScript: “Print this list onto the page.”
    document.getElementById("setlist").innerHTML =
      shuffledSongs.map(song => `<li>${song}</li>`).join('');
  }
  
  document.getElementById("generateSetlist").addEventListener("click", generateSetlist);
  
  // ----------------------------
  // ⏳ Countdown Timer
  // ----------------------------

  const tourStart = new Date("2025-08-01T20:00:00");
  const countdown = document.getElementById("countdown");
  
  function updateCountdown() {
    const now = new Date();
    const diff = tourStart - now;
  
    if (diff <= 0) {
      countdown.textContent = "The tour has started!";
      clearInterval(timer);
      return;
    }
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    countdown.textContent = `⏰ ${hours}h ${minutes}m ${seconds}s until showtime`;
  }
  
  const timer = setInterval(updateCountdown, 1000);
  
  // ----------------------------
  // 🛠️ Feature Scaffolds
  // ----------------------------
  
  // 1️⃣ VIP Ticket Winner Generator
  document.getElementById("vipWinner").innerHTML = `
    <h3>VIP Ticket Winner</h3>
    <button id="pickWinner">Pick Winner</button>
    <div id="winnerOutput"></div>
  `;
  
  const entries = ["alice@example.com", "ben@example.com", "carla@example.com", "dave@example.com"];

  document.getElementById("pickWinner").addEventListener("click", () => {
    const winner = entries[Math.floor(Math.random() * entries.length)];
    document.getElementById("winnerOutput").textContent = `🎉 VIP Winner: ${winner}`;
  });

  
  // 2️⃣ Fan Favorite Showdown
  document.getElementById("fanFavorite").innerHTML = `
    <h3>Fan Favorite Showdown</h3>
    <button id="vote">Vote</button>
    <div id="voteCount">Votes: 0</div>
  `;
  
  let voteCount = 0;

  document.getElementById("vote").addEventListener("click", () => {
    voteCount++;
    document.getElementById("voteCount").textContent = `Votes: ${voteCount}`;
  });

  
  // 3️⃣ Tour Date Spotlight
  document.getElementById("tourHighlight").innerHTML = `
    <h3>Tour Date Spotlight</h3>
    <ul>
    <li id="cityOslo">Oslo</li>
    <li id="cityBerlin">Berlin</li>
    <li id="cityLondon">London</li>
    </ul>
  `;

  // Sample event listener for one city
  document.getElementById("cityOslo").addEventListener("click", () => {
    alert("📍 Oslo – Opening night! Get ready to rock!");
  });

  document.getElementById("cityBerlin").addEventListener("click", () => {
    alert("📍 Berlin – Expect a legendary performance!");
  });

  document.getElementById("cityLondon").addEventListener("click", () => {
    alert("📍 London – The tour’s grand finale!");
  });

  
  // Students will need to add one for each remaining city (Berlin and London)
  
  // 4️⃣ On the Road Again
  document.getElementById("nextTourStop").innerHTML = `
    <h3>On the Road Again</h3>
    <div id="nextStop"></div>
  `;
  
  // This logic can run on page load or refresh
  function displayNextTourStop() {
  const cities = ["Oslo", "Berlin", "London"];
  const nextCity = cities[Math.floor(Math.random() * cities.length)];
  document.getElementById("nextStop").textContent = `🚌 Next stop: ${nextCity}`;
  }

// Call the function once on page load
  displayNextTourStop();

  
  // 5️⃣ Entry Checkpoint
  document.getElementById("emailCheck").innerHTML = `
    <h3>Entry Checkpoint</h3>
    <input type="email" id="emailInput" placeholder="Enter email">
    <button id="checkEmail">Check</button>
    <div id="emailResult"></div>
  `;
  
  document.getElementById("checkEmail").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const result = document.getElementById("emailResult");

  // Basic email validation: must contain "@" and "."
  if (email.includes("@") && email.includes(".")) {
    result.textContent = "✅ Valid email. You're all set!";
    result.style.color = "limegreen";
  } else {
    result.textContent = "❌ Invalid email. Please enter a valid address.";
    result.style.color = "crimson";
  }
  });

  
  // 6️⃣ Band Bio Toggle
  document.getElementById("bioToggle").innerHTML = `
    <h3>Band Bio Toggle</h3>
    <button id="toggleBio">Show/Hide Bio</button>
    <p id="bio" style="display:none;">Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.</p>
  `;

  document.getElementById("toggleBio").addEventListener("click", () => {
  const bio = document.getElementById("bio");

  if (bio.style.display === "none") {
    bio.style.display = "block";
  } else {
    bio.style.display = "none";
  }
  });
