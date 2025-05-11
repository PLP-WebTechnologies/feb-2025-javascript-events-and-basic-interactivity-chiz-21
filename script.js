// ===== Image Gallery =====
const images = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80", // wheat
  "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80",     // corn
  "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=800&q=80"  // cocoa
];
let currentImage = 0;

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  const galleryImg = document.getElementById("galleryImg");
  galleryImg.classList.add("fade-out");

  setTimeout(() => {
    galleryImg.src = images[currentImage];
    galleryImg.classList.remove("fade-out");
  }, 300);
}

// ===== Button Click & Secret Action =====
const btn = document.getElementById("mainBtn");
const secret = document.getElementById("secretAction");

btn.addEventListener("click", () => {
  btn.textContent = "Thanks for Clicking!";
  btn.style.backgroundColor = "#4caf50";
});

btn.addEventListener("dblclick", () => {
  secret.classList.remove("hidden");
  secret.classList.add("bounce");
  setTimeout(() => secret.classList.remove("bounce"), 1000);
});

// ===== Tab Navigation =====
function openTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(c => c.classList.add("hidden"));

  const activeTab = document.getElementById(tabId);
  if (activeTab) activeTab.classList.remove("hidden");
}

// ===== Form Validation =====
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("input", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.textContent = "⚠️ Invalid email format.";
  } else if (password.length < 8) {
    feedback.textContent = "⚠️ Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (feedback.textContent === "") {
    alert("✅ Form submitted successfully!");
    form.reset();
  } else {
    alert("🚫 Please correct the errors before submitting.");
  }
});
